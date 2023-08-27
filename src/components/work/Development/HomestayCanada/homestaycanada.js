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
          I developed a custom website using Next.js, SCSS, Node.js, Express.js,
          and MongoDB. This website serves as a hub connecting homeowners with
          potential tenants, simplifying the process of finding homestay or
          rental arrangements. It's designed to be user-friendly, offering a
          seamless experience for both homeowners and those seeking
          accommodations. My goal was to leverage modern technology to create a
          reliable and convenient solution for this niche
        </DescriptionText>

        <Divider />
        {/* Work  */}
        <Writing size="md" title="Custom CMS Architecture" />
        <DescriptionText>
          This project features a custom Content Management System (CMS) I have
          designed, giving administrators complete control over content
          management. It simplifies the process of updating and modifying
          website information and resources. With an intuitive interface,
          administrators can effortlessly handle property listings, images,
          property details, and user communication. The CMS boosts efficiency,
          ensuring a seamless content management experience for website
          administrators.
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
          MongoDB was the database backbone for this project, efficiently
          storing and retrieving property listings and details. With a
          customized data structure, it handled location, amenities, pricing,
          and availability seamlessly. Using MongoDB's queries, I ensured users
          always got the latest property information, improving the website's
          functionality and user experience.
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
