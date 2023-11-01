import React from "react";

function intro_to_e_r_diagrams_many_to_many_relationships() {
  return (
    <div id="jsn-maincontent" class="span9 order1 row-fluid">
      <div id="jsn-maincontent_inner">
        <div id="jsn-centercol">
          <div id="jsn-centercol_inner">
            <div id="jsn-mainbody-content" class="jsn-hasmainbody">
              <div id="jsn-mainbody-content-inner1">
                <div id="jsn-mainbody-content-inner2">
                  <div id="jsn-mainbody-content-inner3">
                    <div id="jsn-mainbody-content-inner4" class="row-fluid">
                      <div
                        id="jsn-mainbody-content-inner"
                        class="span12 order1"
                      >
                        <div id="jsn-mainbody">
                          <div id="system-message-container"></div>

                          <div
                            class="item-page"
                            itemscope
                            itemtype="https://schema.org/Article"
                          >
                            <meta itemprop="inLanguage" content="en-GB" />

                            <div itemprop="articleBody">
                              <p>&nbsp;</p>
                              <h1 style="text-align: center">
                                Many-to-many relationships
                              </h1>
                              <p>
                                <strong>Introduction</strong>
                                <br />
                                The symbol used to represent a many-to-many
                                relationship is:
                              </p>
                              <p style="text-align: center">
                                <img
                                  src="images/4a8e9c60-843e-40f6-8b20-5aecdfb4e4f6er7.JPG"
                                  alt="er7"
                                />
                              </p>
                              <p>
                                <span style="line-height: 1.5">
                                  Here is an example of a many-to-many
                                  relationship:
                                </span>
                              </p>
                              <p style="text-align: center">
                                <span style="line-height: 1.5">
                                  <img
                                    src="images/bc28e3e3-1bb3-48f7-a698-51db066ad848er8.JPG"
                                    alt="er8"
                                  />
                                </span>
                              </p>
                              <p>
                                <strong>Describing relationships</strong>
                                <br />
                                Using the same method as before, we need to
                                describe the relationship with two sentences:
                              </p>
                              <ul style="list-style-type: disc">
                                <li style="list-style-type: none">
                                  <ul style="list-style-type: disc">
                                    <li>Each pupil studies many GCSEs.</li>
                                    <li>
                                      Each GCSE is studied by many pupils.
                                    </li>
                                  </ul>
                                </li>
                              </ul>
                              <p>
                                How would you implement this database? To help
                                us understand the design, we will put some
                                records in the tables, as before.
                              </p>

                              <p style="text-align: center">
                                <img
                                  src="images/c26197ec-7b8a-4ec3-8dd1-dd28bed03fc8er9.JPG"
                                  alt="er9"
                                />
                              </p>
                              <p>
                                This is a far from ideal solution! For a start,
                                how many attributes will you need in the GCSE
                                table? You could have many indeed if there were
                                lots of pupils taking a particular GCSE. More
                                importantly, however, is that you (or rather
                                Access or whichever software you are using) are
                                going to have a problem recombining the two
                                tables back into one! For example, a record in
                                the GCSE table doesn't match to just one record
                                in the pupil table. One GCSE will match back to
                                many different records in the pupil table. This
                                is not good! We need to 'resolve' the
                                relationship.
                              </p>
                              <p>&nbsp;</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default intro_to_e_r_diagrams_many_to_many_relationships;
