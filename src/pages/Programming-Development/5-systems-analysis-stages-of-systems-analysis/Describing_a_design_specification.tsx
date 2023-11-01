import React from "react";

function Describing_a_design_specification() {
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
                                Describing a design specification
                              </h1>
                              <p>
                                By the time the analyst gets to the design stage
                                of the Systems Life Cycle, they will understand
                                the business and operations in detail,
                                understand the problem area in detail, have
                                agreed with the customer what they want the new
                                system to do and will have outlined the
                                solution. They now need design the detail of the
                                solution to the problem.
                              </p>

                              <p>
                                <br />
                                <br />
                                <img
                                  style="
                                display: block;
                                margin-left: auto;
                                margin-right: auto;
                              "
                                  src="images/59bb65ca-8db4-480c-9fd3-4820e9e08130pic1.JPG"
                                  alt
                                />
                              </p>
                              <p>
                                When the Design stage is complete, it should be
                                possible to give all of the design documentation
                                to any programmer or builder of systems and they
                                should be able to construct the system from
                                those documents alone! This statement is
                                important. It tells you the amount of detail
                                that is needed and the clarity of communication
                                that is required by the documentation in this
                                stage.
                                <br />
                                <br />
                                <strong>Written descriptions</strong>
                                <br />A good starting point for the Design stage
                                is for the Analyst is to write out in the future
                                tense how the proposed system will work. They
                                should try to picture people using the system
                                and describe what they are doing. They should
                                describe each task a user needs to perform and
                                how it is carried out. They need to paint very
                                clear pictures with their descriptions so that
                                they are understood by anyone who needs to refer
                                to them. <br />
                                <br />
                                <strong>Diagrammatic representations</strong>
                                <br />
                                Once they have described the system in writing,
                                they should then produce diagrammatic
                                representations of the design. This will involve
                                producing Dataflow Diagrams and Structure
                                Diagrams of the proposed system. These were
                                described earlier. It is useful to know that
                                there are other diagrams that could be used here
                                as well as the ones already mentioned. Although
                                we will save the detail about these and how they
                                are used for later chapters, we will briefly
                                mention them.
                              </p>
                              <ul>
                                <li style="list-style-type: none">
                                  <ul style="list-style-type: disc">
                                    <li>
                                      <span style="line-height: 1.3em">
                                        Entity-Relationship diagrams. These
                                        diagrams summarise how records in a
                                        database are to be organised into tables
                                        and how the tables are related.
                                      </span>
                                    </li>
                                    <li>
                                      <span style="line-height: 1.3em">
                                        Entity Life Histories. These diagrams
                                        summarise what happens to a particular
                                        record in a database. For example, they
                                        will show that at some point a new
                                        record is created, gets amended, and
                                        gets removed from the system.
                                      </span>
                                    </li>
                                    <li>
                                      <span style="line-height: 1.3em">
                                        Normalisation. This is a technique that
                                        helps produce an efficient database
                                        design.
                                      </span>
                                    </li>
                                  </ul>
                                </li>
                              </ul>
                              <p>
                                Diagrams generally are a good thing for
                                analysts, designers and customers:
                                <br />
                                <br />
                                <img
                                  style="
                                display: block;
                                margin-left: auto;
                                margin-right: auto;
                              "
                                  src="images/2edc8b1e-9fa8-4c80-a3a5-3a981e0ea00cPic2.JPG"
                                  alt
                                />
                                <br />
                                <strong>Input design</strong>
                                <br />
                                When designing the way that data gets from the
                                outside world into a system, some questions need
                                to be asked. These include:
                              </p>
                              <ul style="list-style-type: disc">
                                <li style="list-style-type: none">
                                  <ul style="list-style-type: disc">
                                    <li>
                                      <span style="line-height: 1.3em">
                                        Will the data be collected on paper
                                        forms first or will the data be entered
                                        in directly?
                                      </span>
                                    </li>
                                    <li>
                                      <span style="line-height: 1.3em">
                                        In what form will the data be in if it
                                        is entered in automatically? For
                                        example, will it be coded up in a bar
                                        code, or using MICR, or using OCR, or in
                                        some other way?
                                      </span>
                                    </li>
                                    <li>
                                      <span style="line-height: 1.3em">
                                        What hardware exists, or will exist, to
                                        get the data into the computer? Will
                                        there be keyboards, a graphics tablet,
                                        touch-screens, microphones for voice
                                        recognition, for example?
                                      </span>
                                    </li>
                                    <li>
                                      <span style="line-height: 1.3em">
                                        What skills will the operators have? Do
                                        any disabilities need to be taken into
                                        account, for example?
                                      </span>
                                    </li>
                                    <li>
                                      <span style="line-height: 1.3em">
                                        What kind of interface will be
                                        appropriate for the system? For example,
                                        is a command line interface appropriate,
                                        or a menu-driven interface, or a
                                        different type of interface appropriate?
                                      </span>
                                    </li>
                                  </ul>
                                </li>
                              </ul>
                              <p>
                                <strong>Output design</strong>
                                <br />
                                When designing the way that data will get from
                                the computer system into the outside world,
                                similar questions to the design of input methods
                                need to be asked. Who are the users, what are
                                their skills, do they have any special needs,
                                where will the output come out, where will it be
                                used and what will be done with it? The key
                                question to remember here is, ‘Who needs what
                                information from the system, when and in what
                                form?’ There are a number of output techniques
                                that could be considered.
                              </p>
                              <ul style="list-style-type: disc">
                                <li style="list-style-type: none">
                                  <ul style="list-style-type: disc">
                                    <li>
                                      <span style="line-height: 1.3em">
                                        Audio could be used to signal alarms in
                                        noisy, busy factories or to signal a
                                        break-in in a house.
                                      </span>
                                    </li>
                                    <li>
                                      <span style="line-height: 1.3em">
                                        Key information on a VDU could be
                                        colour-coded or a different font size or
                                        style used.
                                      </span>
                                    </li>
                                    <li>
                                      <span style="line-height: 1.3em">
                                        Important information could flash.
                                      </span>
                                    </li>
                                    <li>
                                      <span style="line-height: 1.3em">
                                        Pictures could be used to represent or
                                        reinforce information.
                                      </span>
                                    </li>
                                    <li>
                                      <span style="line-height: 1.3em">
                                        Graphs can be used to display
                                        information such as temperature trends
                                        over a period of time in a factory.
                                      </span>
                                    </li>
                                    <li>
                                      <span style="line-height: 1.3em">
                                        Printouts could be used so that
                                        information is easily transported.
                                      </span>
                                    </li>
                                    <li>
                                      <span style="line-height: 1.3em">
                                        Plotters can be used to provide large
                                        accurate drawings in an engineering
                                        design department.
                                      </span>
                                    </li>
                                    <li>
                                      <span style="line-height: 1.3em">
                                        Dot matrix printers can be used to
                                        provide physical copies of key
                                        documents.
                                      </span>
                                    </li>
                                  </ul>
                                </li>
                              </ul>
                              <p>
                                <strong>
                                  Data dictionary (following on from the
                                  Analysis stage)
                                </strong>
                                <br />A data dictionary needs to be produced for
                                the new system. The information for this will
                                have been collected during the systems analysis
                                stage. For each data item that will be part of
                                the new system, the designer should state the
                                name of the piece of data and any synonyms, the
                                data type, the validation rules for the data, an
                                example, origin and use of the data. It is also
                                helpful to specify how verification of the data
                                items will take place. In addition to this, the
                                designer should calculate the volume of data
                                that is likely to be in the new system. This can
                                then be used to specify appropriate data storage
                                and backup systems.
                                <br />
                                <br />
                                <strong>Program specification</strong>
                                <br />
                                Solutions may require some programming. Part of
                                the design documentation, therefore, needs to
                                describe the functions that any code will
                                perform. These can be described by writing a
                                description of each function in detail, writing
                                pseudo-code for each function or producing
                                diagrams such as a flow chart or a Jackson
                                diagram. The specification will also identify
                                the language to use and program libraries needed
                                along with the routines within them.
                              </p>
                              <p>
                                <strong>Test plan</strong>
                                <br />
                                The test plan should be produced in the Design
                                stage of the systems life cycle. It should be
                                detailed and cover:
                              </p>
                              <ul>
                                <li style="list-style-type: none">
                                  <ul style="list-style-type: disc">
                                    <li>
                                      <span style="line-height: 1.3em">
                                        white box testing
                                      </span>
                                    </li>
                                    <li>
                                      <span style="line-height: 1.3em">
                                        black box testing
                                      </span>
                                    </li>
                                    <li>
                                      <span style="line-height: 1.3em">
                                        alpha testing
                                      </span>
                                    </li>
                                    <li>
                                      <span style="line-height: 1.3em">
                                        beta testing
                                      </span>
                                    </li>
                                    <li>
                                      <span style="line-height: 1.3em">
                                        acceptance testing.
                                      </span>
                                    </li>
                                  </ul>
                                </li>
                              </ul>
                              <p>
                                Test plans are written to ensure that the
                                product does what it is supposed to do. Where
                                appropriate, the actual test runs to be carried
                                out should be specified. The actual data that
                                will be used in each test should be stated as
                                well as the predicted outcomes for each test. It
                                is usual for each test, that a typical,
                                atypical, borderline, extreme and silly piece of
                                data is used (so each test is in fact made up of
                                five parts). It is often said that the purpose
                                of testing is to try and make your system or
                                software fail. If you try your hardest to make
                                it fail and you can't, then your product is
                                (probably) robust.
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

export default Describing_a_design_specification;
