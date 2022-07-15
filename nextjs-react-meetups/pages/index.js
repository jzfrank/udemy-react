import Head from "next/head";
import { MongoClient } from "mongodb";
import MeetupList from "../components/meetups/MeetupList";
import { Fragment } from "react";

const DUMMY_MEETUPS = [
  {
    id: "m1",
    title: "A first Meetup",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9e/Pfannenstiel_-_Z%C3%BCrichsee_-_Sihltal_-_Albis_Baldern_IMG_5316.jpg/2255px-Pfannenstiel_-_Z%C3%BCrichsee_-_Sihltal_-_Albis_Baldern_IMG_5316.jpg",
    address: "Some address 5, 12345 Some City",
    description: "This is a first Meetup!",
  },
  {
    id: "m2",
    title: "A second Meetup",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9e/Pfannenstiel_-_Z%C3%BCrichsee_-_Sihltal_-_Albis_Baldern_IMG_5316.jpg/2255px-Pfannenstiel_-_Z%C3%BCrichsee_-_Sihltal_-_Albis_Baldern_IMG_5316.jpg",
    address: "Some address 5, 12345 Some City",
    description: "This is a second Meetup!",
  },
];

function HomePage(props) {
  console.log(process.env.TEST_ENV);
  console.log(
    "process.env.MONGODB_CONNECT_URL",
    process.env.MONGODB_CONNECT_URL
  );
  return (
    <Fragment>
      <Head>
        <title>React Meetups</title>
        <meta
          name="description"
          content="Browse a huge list of highly active react meetups!"
        />
      </Head>
      <MeetupList meetups={props.meetups} />
    </Fragment>
  );
}

// export async function getServerSideProps(context) {
//   const req = context.req;
//   const res = context.res;
//   // fetch data from an API
//   return {
//     props: {
//       meetups: DUMMY_MEETUPS,
//     },
//   };
// }

// pre-rendering
export async function getStaticProps() {
  // fetch data from an API
  const client = await MongoClient.connect(process.env.MONGODB_CONNECT_URL);
  console.log(process.env.MONGODB_CONNECT_URL);

  const db = client.db();
  const meetupsCollection = db.collection("meetups");

  const meetups = await meetupsCollection.find().toArray();

  console.log(meetups);
  client.close();

  return {
    props: {
      meetups: meetups.map((meetup) => ({
        title: meetup.title,
        address: meetup.address,
        image: meetup.image,
        description: meetup.description,
        id: meetup._id.toString(),
      })),
    },
    // generate every couple of seconds with request comin
    revalidate: 10,
  };
}

export default HomePage;
