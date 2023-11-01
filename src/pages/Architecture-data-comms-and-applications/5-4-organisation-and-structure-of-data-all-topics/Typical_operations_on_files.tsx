import React from "react";

function Typical_operations_on_files() {
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
                                Typical operations on files
                              </h1>
                              <p>
                                <strong>
                                  <span class="NormalContentHeading">
                                    Introduction
                                  </span>
                                </strong>
                                <br />
                                When you write programs, you will at some point
                                need to save data to a file or get back data you
                                have already saved. How you do this will depend
                                on the language you are using but the following
                                notes using pseudo-code are common to most
                                languages.
                              </p>

                              <p>
                                <strong>
                                  <span class="NormalContentHeading">
                                    Opening, reading and writing files
                                  </span>
                                </strong>
                                <br />
                                The usual method for this is to:
                              </p>
                              <ul style="list-style-type: disc">
                                <li style="list-style-type: none">
                                  <ul style="list-style-type: disc">
                                    <li class="NormalContent">
                                      DECLARE a variable.
                                    </li>
                                    <li class="NormalContent">
                                      ASSIGN the file that you want to work with
                                      to that variable.
                                    </li>
                                    <li class="NormalContent">OPEN the file</li>
                                    <li class="NormalContent">
                                      READ the file one line at a time.
                                    </li>
                                    <li class="NormalContent">
                                      WRITE to the file, one line at a time.
                                    </li>
                                    <li class="NormalContent">
                                      CLOSE the files when finished.
                                    </li>
                                  </ul>
                                </li>
                              </ul>
                              <p>
                                <strong>
                                  <span class="NormalContentHeading">
                                    Updating a file / appending data (append
                                    means 'add on to the end').
                                  </span>
                                </strong>
                                <br />
                                <span class="NormalContent">
                                  If you wanted to update a file:
                                  <br />
                                </span>
                              </p>
                              <ol style="list-style-type: lower-alpha">
                                <li style="list-style-type: none">
                                  <ol style="list-style-type: lower-alpha">
                                    <li class="NormalContent">
                                      You would need to get the original file,
                                      using DECLARE, ASSIGN, OPEN and READ or
                                      WRITE as described above.
                                    </li>
                                    <li class="NormalContent">
                                      You then need to create a second file,
                                      using DECLARE, ASSIGN, OPEN and READ or
                                      WRITE as described above.
                                    </li>
                                    <li class="NormalContent">
                                      You would copy across the original data
                                      plus the extra data into this second file.
                                    </li>
                                    <li class="NormalContent">
                                      The first, original file would then be
                                      renamed as a backup file.
                                    </li>
                                    <li class="NormalContent">
                                      The second updated file would be given the
                                      name of the original file.
                                    </li>
                                    <li class="NormalContent">
                                      Close the files.
                                    </li>
                                  </ol>
                                </li>
                              </ol>
                              <p>
                                <strong>
                                  Inserting / deleting / appending an item in a
                                  file
                                  <br />
                                </strong>
                                Inserting and deleting data in a file requires
                                two files and is similar to updating a file:
                              </p>
                              <ol style="list-style-type: lower-alpha">
                                <li style="list-style-type: none">
                                  <ol style="list-style-type: lower-alpha">
                                    <li class="NormalContent">
                                      You would need to get the original file,
                                      using DECLARE, ASSIGN, OPEN and READ or
                                      WRITE as described above.
                                    </li>
                                    <li class="NormalContent">
                                      You then need to create a second file,
                                      using DECLARE, ASSIGN, OPEN and READ or
                                      WRITE as described above.
                                    </li>
                                    <li class="NormalContent">
                                      You would copy across the original data to
                                      the second file, up to the point you want
                                      to add or delete some data.
                                    </li>
                                    <li class="NormalContent">
                                      You then add or delete the data you want
                                      to add or delete.
                                    </li>
                                    <li class="NormalContent">
                                      You then copy the remaining part of the
                                      file from the first file across to the
                                      second file.
                                    </li>
                                    <li class="NormalContent">
                                      The first, original file would then be
                                      renamed as a backup file.
                                    </li>
                                    <li class="NormalContent">
                                      The second updated file would be given the
                                      name of the original file.
                                    </li>
                                    <li class="NormalContent">
                                      <span style="line-height: 1.5">
                                        Close the files.
                                      </span>
                                    </li>
                                  </ol>
                                </li>
                              </ol>
                              <p></p>
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

export default Typical_operations_on_files;
