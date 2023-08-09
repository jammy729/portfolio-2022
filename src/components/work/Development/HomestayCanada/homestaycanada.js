import React from "react";
import { Title, WorkImage, Tag } from "../../../layouts/work-grid";
import {
  Box,
  Container,
  List,
  ListItem,
  Divider,
  Link,
} from "@chakra-ui/react";
import { Writing, DescriptionText } from "../../layout";
import { ExternalLinkIcon } from "@chakra-ui/icons";

import cover from "./cover.png";
import admin_edit from "./admin-edit.png";
import room2 from "./room-2.png";
import near_listing from "./near_listing.png";
import filter from "./filter.png";
import edit from "./edit.png";
const HomestayCanada = () => {
  return (
    <Box>
      <Container maxW="container.lg">
        <Title>Homestay Canada</Title>
        <WorkImage src={cover} alt="Brixwork Real Estate Marketing" w="full" />
        {/* BADGES  */}
        <List>
          <ListItem>
            <Tag> Type </Tag> Full Stack Web Development
          </ListItem>
          <ListItem>
            <Tag> Technical/Design Skills </Tag> Next.js, Node.js, Express.js,
            MongoDB, SCSS, Email.js
          </ListItem>
          <ListItem>
            <Tag> Source </Tag>
            <Link
              color="blue.500"
              href="https://client-homestay-canada.vercel.app/"
              isExternal
              target="blank"
            >
              Homestay Canada Website
              <ExternalLinkIcon mx="2px" />
            </Link>
          </ListItem>
        </List>

        {/* OVERVIEW   */}
        <Writing size="md" title="Project Overview" />
        <DescriptionText>
          For this project, I had the opportunity to develop a customized
          website that serves as a platform connecting homeowners with
          individuals seeking homestay or rental opportunities. Leveraging
          cutting-edge technologies such as Next.js, SCSS, Node.js, Express.js,
          and MongoDB, I built a robust and user-friendly website that
          facilitates seamless interactions between homeowners and potential
          tenants. The website's primary goal is to streamline the process of
          finding and securing homestay or rental arrangements, offering a
          convenient and reliable solution for both homeowners and individuals
          seeking accommodations.
        </DescriptionText>

        <Divider />
        {/* Work  */}
        <Writing size="md" title="Custom CMS Architecture" />
        <DescriptionText>
          Custom CMS Architecture: One of the standout features of this project
          is the implementation of a custom Content Management System (CMS)
          architecture. This architecture empowers administrators with complete
          control over content management, allowing them to easily update and
          modify the website's information and resources. Through an intuitive
          and user-friendly interface, administrators can effortlessly manage
          property listings, upload images, edit property details, and
          communicate with users. By incorporating this bespoke CMS, we were
          able to provide the website's administrators with a powerful tool that
          enhances their efficiency and ensures a seamless content management
          experience.
        </DescriptionText>
        <WorkImage
          src={edit}
          alt="/admin/dashboard control over the listing datas to delete, edit or create"
          caption="/admin/dashboard control over the listing datas to delete, edit or create"
          w="full"
        />
        <WorkImage
          src={admin_edit}
          alt="/admin editing the listing"
          caption="/admin editing the listing"
          w="full"
        />
        <Divider />
        {/* Work  */}
        <Writing size="md" title="Database Integration with MongoDB:" />
        <DescriptionText>
          I leveraged MongoDB as the database for this project, enabling
          efficient storage and retrieval of property listings and details. By
          designing a data schema tailored to the website's needs, MongoDB
          facilitated seamless storage of location, amenities, pricing, and
          availability information. Leveraging MongoDB's querying capabilities,
          I implemented a robust data fetching system, ensuring real-time and
          relevant property listings for users seeking homestays or rentals.
          This integration enhances the website's functionality and user
          experience, providing accurate and up-to-date information to make
          informed decisions.
        </DescriptionText>
        <WorkImage
          src={room2}
          w="full"
          alt="/work/:id fetching data from MongoDB from the backend to show on the frontend"
          caption="/work/:id fetching data from MongoDB from the backend to show on the frontend"
        />

        <Divider />
        <Writing size="md" title="Other Functionalities" />
        <DescriptionText>
          I have implemented other functionalities such as being able to filter
          by city and type of accomodation such as rental or homestay.
        </DescriptionText>

        <WorkImage
          src={filter}
          w="full"
          caption="Filtering areas in /rooms to display the listings just in the selected city"
          alt="Filtering areas in /rooms to display the listings just in the selected city"
        />

        <DescriptionText>
          Additional functionalities are being able to look at other listings in
          the area in the listing detail page.
        </DescriptionText>
        <DescriptionText>
          Clients can also contact the admin using the form on the footer which
          is an integrated API using EmailJS which sends out an email.
        </DescriptionText>
        <WorkImage
          src={near_listing}
          w="full"
          alt="functionalities which includes displaying listings in the city area if it exists, "
          caption="Functionalities which includes displaying listings in the city area if it exists, and contact form which uses EmailJS"
        />

        <br />
        <br />
        <br />
      </Container>
    </Box>
  );
};

export default HomestayCanada;
