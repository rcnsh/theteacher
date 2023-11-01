import React from "react";

function intro_to_e_r_diagrams_summary() {
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
                              <h1 style="text-align: center">Summary</h1>
                              <p>
                                <strong>Introduction</strong>
                                <br />
                                We now know of two techniques that are commonly
                                used to help us design a database. These are:
                              </p>
                              <ul style="list-style-type: disc">
                                <li style="list-style-type: none">
                                  <ul style="list-style-type: disc">
                                    <li>E-R diagrams.</li>
                                    <li>Normalisation.</li>
                                  </ul>
                                </li>
                              </ul>
                              <p>
                                We know that these two techniques are not
                                mutually exclusive but are used together, to
                                validate and support the final design. We know
                                that an E-R diagram may produce a design that is
                                different to the one produced by normalisation.
                                We know that this is not a problem. We simply
                                have to justify whichever final design we decide
                                to go with.
                              </p>
                              <p>
                                We know that E-R diagrams identify the entities
                                and relationships in a database, but not the
                                attributes. We also know that they help database
                                designers in a number of other ways, not least
                                of which is to provide a vehicle so that teams
                                of designers can discuss proposed designs.
                              </p>
                              <p>
                                <strong>Three types of relationships</strong>
                                <br />
                                We know that we need to be aware of three types
                                of relationship in an E-R diagram. These are:
                              </p>
                              <ol>
                                <li style="list-style-type: none">
                                  <ol>
                                    <li>One-to-one relationships.</li>
                                    <li>One-to-many relationships.</li>
                                    <li>Many-to-many relationships.</li>
                                  </ol>
                                </li>
                              </ol>
                              <p>
                                Many-to-many relationships are particularly
                                problematic in database designs. We should
                                always ‘resolve’ a many-to-many relationship
                                into two one-to-many relationships. We know that
                                when we resolve a many-to-many relationship, we
                                have to create a ‘middle’ entity. We then create
                                two one-to-many relationships (with the many
                                side of the relationship lines both pointing
                                inwards towards the middle entity). There are
                                two further problems that have to be overcome
                                when we resolve a many-to-many relationship.
                                These are:
                              </p>
                              <ol>
                                <li style="list-style-type: none">
                                  <ol>
                                    <li>
                                      What name do we give to the new middle
                                      entity we have created?
                                    </li>
                                    <li>
                                      What helping words and phrases do we add
                                      to the relationship lines?
                                    </li>
                                  </ol>
                                </li>
                              </ol>
                              <p>
                                There isn’t an easy answer to either question.
                              </p>
                              <ol>
                                <li style="list-style-type: none">
                                  <ol>
                                    <li>
                                      Sometimes an obvious name for the middle
                                      entity jumps out at us. For example, if we
                                      have an entity SHOP in a many-to-many
                                      relationship with an entity PRODUCT, the
                                      obvious name for the middle entity is
                                      STOCK.
                                    </li>
                                    <li>
                                      We can, however, always call the middle
                                      entity a combination of the original two
                                      tables. For example, if we have an entity
                                      PRODUCT in a many-to-many relationship
                                      with a RESOURCE entity, the middle table
                                      can be called PRODUCT_RESOURCE if we can’t
                                      think of a better name.
                                    </li>
                                    <li>
                                      Helping words and phrases can be quite
                                      difficult to phrase when we have a
                                      resolved a many-to-many relationship. We
                                      just have to try our best to make them as
                                      meaningful and as helpful as possible.
                                    </li>
                                  </ol>
                                </li>
                              </ol>
                              <p>
                                <strong>Describing a system</strong>
                                <br />
                                We know that if we are to produce an E-R
                                diagram, we must first investigate a system and
                                try to describe what is happening in words. We
                                can investigate systems by observation,
                                interviews and questionnaires, apart from other
                                methods. Once we are able to write down a
                                description of the system, we know that we then
                                need to identify the entities in the system and
                                how they are related. Once we have a done this,
                                we are in a position to draw a first draft of an
                                E-R diagram.
                              </p>
                              <p>
                                We know that when we draw an E-R diagram, we
                                should do the following things:
                              </p>
                              <ol>
                                <li style="list-style-type: none">
                                  <ol>
                                    <li>Draw the entities.</li>
                                    <li>
                                      Make sure every entity is given a singular
                                      not plural name (e.g. call an entity PUPIL
                                      not PUPILS, EMPLOYEE not EMPLOYEES and so
                                      on).
                                    </li>
                                    <li>
                                      Connect the entities with the right kind
                                      of relationship line.
                                    </li>
                                    <li>Add helping words and phrases.</li>
                                    <li>
                                      Resolve all many-to-many relationships.
                                    </li>
                                  </ol>
                                </li>
                              </ol>
                              <p>
                                We know that we are unlikely to get the E-R
                                diagram perfectly correct the first time round.
                                We need to:
                              </p>
                              <ol>
                                <li style="list-style-type: none">
                                  <ol>
                                    <li>
                                      Draw the first draft of the E-R diagram.
                                    </li>
                                    <li>
                                      Review it, ideally by discussing it with
                                      other designers.
                                    </li>
                                    <li>
                                      Draw a second, improved E-R diagram.
                                    </li>
                                    <li>
                                      Review it again, and repeat the process of
                                      redrafting and reviewing until we are
                                      happy.
                                    </li>
                                    <li>
                                      Check it against the results of using the
                                      normalisation approach, or validate the
                                      design using normalisation.
                                    </li>
                                  </ol>
                                </li>
                              </ol>
                              <p>
                                Once we have completed our E-R diagram, we know:
                              </p>
                              <ol>
                                <li style="list-style-type: none">
                                  <ol>
                                    <li>
                                      What tables we need to have in our
                                      database.
                                    </li>
                                    <li>
                                      How we must link those tables.
                                      <span style="line-height: 1.5">
                                        &nbsp;
                                      </span>
                                    </li>
                                  </ol>
                                </li>
                              </ol>
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

export default intro_to_e_r_diagrams_summary;
