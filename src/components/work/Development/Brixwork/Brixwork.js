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

import server_point from "./server-point.png";
import dynamic_fetch from "./dynamic-fetch-php.png";
import marketing_block from "./marketing-block.png";
import cover from "./cover.png";
import backend_marketing from "./backend-marketing.png";

const Brixwork = () => {
  return (
    <Box>
      <Container maxW="container.lg">
        <Title>Brixwork Real Estate Marketing</Title>
        <WorkImage src={cover} alt="Brixwork Real Estate Marketing" w="full" />
        {/* BADGES  */}
        <List>
          <ListItem>
            <Tag> Type </Tag> Web Development, SEO On-Site Engineering
          </ListItem>
          <ListItem>
            <Tag> Technical/Design Skills </Tag> HTML, SASS, jQuery, PHP, AWS
            S3, Website QA DevOps, CPanel
          </ListItem>
          <ListItem>
            <Tag> Source </Tag>
            <Link
              color="blue.500"
              href="https://www.lesliemcconnell.ca/"
              isExternal
              target="blank"
            >
              Leslie McConnell Website
              <ExternalLinkIcon mx="2px" />
            </Link>
          </ListItem>
        </List>

        {/* OVERVIEW   */}
        <Writing size="md" title="Overview" />
        <DescriptionText>
          I worked as a Front-end Web Developer at Brixwork Real Estate
          Marketing for four months, from late August to late December 2022.
          Brixwork specializes in creating websites for real estate
          professionals across North America. In this role, I honed my
          development skills, primarily in front-end development, and gained
          insights into backend development, DevOps operations, and worked with
          cPanel and AWS S3.
        </DescriptionText>
        <Divider />
        {/* Work  */}
        <Writing size="md" title="Main Project" />
        <DescriptionText>
          My primary project involved creating a custom website for Leslie
          McConnell, an independent broker with Engel & Volkers in Vancouver,
          BC. I began after receiving the designer team's approved website
          design via Zeplin, a product development tool. To ensure everything
          ran smoothly, I followed an initial website procedure, including DNS
          checks to confirm the server was correctly linked to the host server
          and connecting to the right FTP.
        </DescriptionText>
        <WorkImage
          src={server_point}
          alt="terminal command to check whether the client server is pointing to the Brixwork server"
          caption="Image 1 - A terminal command line to check whether the client server is pointing to the Brixwork server"
          w="full"
        />

        <Writing size="sm" title="Challenges" />

        <DescriptionText>
          The website fetches data from the custom-made
          content-management-system (CMS) from the client admin backend (image
          2) so client can change medias, add contents and texts. <br />I was
          familiar with fetching datas from the backend but struggled to create
          dynamic front-end for clients as I wasn't too familiar with the work
          infrastructure. I mainly struggled to style different divs so I
          initially hard-coded. <br /> With the help of co-workers and
          supervisor Jeff, I felt more comfortable with dynamic fetching and
          style individual divs as needed. As I started to ask more questions
          and practice more, I was able to generate functional customs to loop
          through to complete tasks in a shorter amount of time (image 3).
        </DescriptionText>
        <WorkImage
          src={backend_marketing}
          alt="client's backend"
          caption="Image 2 - View of clien't backend which allows client's to create subpages, contents, images and other enabled modules"
          w="full"
        />
        <WorkImage
          src={dynamic_fetch}
          alt="a function to fetch datas dynamically from the backend"
          caption="Image 3 - PHP code to fetch the subpage datas dynamically on the marketing page"
          w="full"
        />

        <DescriptionText>
          My second challenges was being familiar with SCSS. Prior to SCSS, I
          had basic fundamentals of CSS but mainly used CSS frameworks such as
          ChakraUI which helped me create websites much easier without worrying
          too much about CSS but knew I lack foundation such as grids and
          flexbox. <br />
          As I am working everyday with SCSS with no framework, I got out of my
          comfort zone to really understand SCSS such as grids, and flexbox that
          I feel comfortable using either one with no issues. In addition, I
          felt comfortable manipulating individual divs to style when datas are
          dynamically fetched as seen on image 4.
        </DescriptionText>
        <WorkImage
          src={marketing_block}
          alt="frontend of marketing page with dynamic fetch"
          caption="Image 4 - Frontend view when the datas are fetched dynamically and styled to individual divs"
          w="full"
        />
        <Divider />
        <Writing size="md" title="Reflection" />
        <DescriptionText>
          I came into Brixwork Real Estate Marketing with knowledge in many JS
          frameworks such as React, Angular or Vue but I always knew I lacked in
          foundation such as truly understanding CSS, proper syntax, meta-tags
          and other elements to become a better front-end developer. After
          working at this company, I truly feel confident in SCSS, how to
          structure a development folders and debug errors. I found myself
          completing tasks faster, and effectively which I am very proud of.
          <br /> <br />
          I feel that I have developed technical and communication skills to be
          a better developer. Surprisingly, if one takeaway from the project or
          working at this company is reaching out for help and ask questions.
          Initially, when I was stuck, I would use search engine or tried to
          figure out myself, but I neglected the fact that there are people to
          educate and guide me. After realizing that, I started to ask more
          questions, and be more active in discussions, I found myself learning
          everyday at work.
          <br /> <br />
          Apart from front-end development, I am currently working to get the
          core template PHP to upgrade from 7.3 to 8.1. Prior PHP version
          allowed soft passes and deprecated some issues but the newer version
          requires the developer to be more explicit and is more strict so I am
          currently fixing and noting on Asana to let other coders know about
          the issues.
        </DescriptionText>
        <br />
        <br />
        <br />
      </Container>
    </Box>
  );
};

export default Brixwork;
