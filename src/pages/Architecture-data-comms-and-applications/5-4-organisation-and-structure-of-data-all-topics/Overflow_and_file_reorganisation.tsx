import React from "react";

function Overflow_and_file_reorganisation() {
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
                              <p></p>
                              <h1
                                class="ContentHeading"
                                style="text-align: center"
                                align="center"
                              >
                                Overflow and file reorganisation
                              </h1>
                              <p class="NormalContent">
                                <strong class="NormalContentHeading">
                                  Introduction
                                  <br />
                                </strong>
                                When new files have to be stored in a sequential
                                file, it may not be possible to store them at
                                that moment in time in their correct place.
                                There may not be the space available at the
                                right place in the file. Some files will need to
                                be deleted but can't be deleted straightaway so
                                they are 'marked' to be deleted in the future.
                                Some files are deleted straightaway and leave
                                gaps in the file structure. You may also have
                                the situation where a file is changed, and the
                                change is such that the newly modified file
                                cannot be written back to its original
                                destination. When this situation happens, they
                                are stored in a special area called an
                                'overflow' area'.
                              </p>

                              <p
                                class="NormalContent"
                                style="text-align: left"
                                align="center"
                              >
                                <strong>
                                  Techniques for managing the overflow area
                                </strong>
                                <br />
                                When a file cannot be stored in the correct
                                place, or a modified file cannot be written back
                                to its original place, the file is saved in the
                                overflow area and a record of where it can be
                                found is placed in the main file area. This can
                                be an ordered overflow area but typically, it is
                                unordered.
                              </p>
                              <p
                                class="NormalContent"
                                style="text-align: left"
                                align="center"
                              >
                                Managing the overflow area is an important
                                consideration if file operations are not to
                                quickly slow down and to prevent too many file
                                reorganisations being necessary. When files are
                                created in the first place, they can include
                                some storage redundancy in anticipation of the
                                need to store more files in the future. This is
                                a technique used to reduce the early need for an
                                overflow area. When used, overflow areas are
                                typically split into blocks. One block is filled
                                up and then once full, another overflow block is
                                linked to it and used. Another technique, which
                                is more complex to manage, is that once a block
                                is filled, it is split up into two seperate
                                blocks to create more distributed space. This is
                                called
                                <strong>
                                  <em>celluar splitting</em>
                                </strong>{" "}
                                and is more flexible and dynamic than chaining
                                larger blocks together as described before.
                              </p>
                              <p
                                class="NormalContent"
                                style="text-align: left"
                                align="center"
                              >
                                &nbsp;
                              </p>
                              <p
                                class="NormalContent"
                                style="text-align: left"
                                align="center"
                              >
                                <strong style="line-height: 16.3636360168457px">
                                  The need for file ororganisation
                                  <br />
                                </strong>
                                Over time, the overflow area will increase as
                                more files are placed in it. This will become an
                                unsatisfactory situation over time as it will
                                slow down the system; searching through data and
                                sorting it will take longer as the records won't
                                be in their most efficient order for fast
                                searches and sorts. The records will be in two
                                different places, and each of them will need to
                                be looked at. In addition, the gaps created when
                                files have been removed will also slow down file
                                operations and clearly, over time, the number of
                                gaps in the file structure is likely to
                                increase.
                              </p>
                              <p
                                class="NormalContent"
                                style="text-align: left"
                                align="center"
                              >
                                Periodically, a sequential file of data will
                                need to be reorganised. This will involve
                                reorganising and writing the file to a new area.
                              </p>
                              <ul>
                                <li style="list-style-type: none">
                                  <ul>
                                    <li
                                      class="NormalContent"
                                      style="text-align: left"
                                    >
                                      All of the files from both the original
                                      area and the overflow area will have to be
                                      transfered to the new file and combined
                                      into the correct order.
                                    </li>
                                    <li
                                      class="NormalContent"
                                      style="text-align: left"
                                    >
                                      Any files that have been marked for
                                      removal will have to be removed.
                                    </li>
                                    <li
                                      class="NormalContent"
                                      style="text-align: left"
                                    >
                                      All indexes associated with the data will
                                      have to be re-written.
                                    </li>
                                    <li
                                      class="NormalContent"
                                      style="text-align: left"
                                    >
                                      The old data file will need to be deleted.
                                    </li>
                                    <li
                                      class="NormalContent"
                                      style="text-align: left"
                                    >
                                      The overflow area will have to be cleared
                                      out.
                                    </li>
                                  </ul>
                                </li>
                              </ul>
                              <p
                                class="NormalContent"
                                style="text-align: left"
                                align="center"
                              ></p>
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

export default Overflow_and_file_reorganisation;
