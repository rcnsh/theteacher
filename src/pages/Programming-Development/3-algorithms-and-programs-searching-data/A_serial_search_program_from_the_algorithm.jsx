import React from "react";

function A_serial_search_program_from_the_algorithm() {
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
                              <h1 style="text-align: center">
                                A serial search program from the algorithm
                              </h1>
                              <p>
                                <span style="line-height: 1.5">
                                  We have seen that a typical algorithm for a
                                  serial search through a list called{" "}
                                </span>
                                <strong style="line-height: 1.5">myList</strong>
                                <span style="line-height: 1.5"> of size </span>
                                <strong style="line-height: 1.5">n</strong>
                                <span style="line-height: 1.5">
                                  &nbsp;to find the first instance of a piece of
                                  data is as follows:
                                </span>
                              </p>

                              <p>
                                <strong>
                                  Set a variable called index = 0 &nbsp; &nbsp;#
                                  this will be our counter, to work through a
                                  list
                                </strong>
                                <br />
                                <strong>
                                  Set a Boolean flag called found = False &nbsp;
                                  &nbsp;# this will indicate if we have found
                                  the item or not
                                </strong>
                                <br />
                                <strong>
                                  Set a variable called hunted to be the data we
                                  are searching for.
                                </strong>
                              </p>
                              <p>
                                <strong>
                                  while (index &lt; n) and (found == false):
                                </strong>
                                <br />
                                <strong>
                                  &nbsp; &nbsp; &nbsp;if myList[index] == hunted
                                </strong>
                                <br />
                                <strong>
                                  &nbsp; &nbsp; &nbsp; &nbsp; found = true
                                  <br />
                                </strong>
                                <strong>
                                  &nbsp; &nbsp; &nbsp;else
                                  <br />
                                </strong>
                                <strong>
                                  &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;index =
                                  index + 1
                                </strong>
                              </p>
                              <p>
                                <strong>
                                  if found == true
                                  <br />
                                  &nbsp; &nbsp; &nbsp;print("Item found at
                                  position", index)
                                  <br />
                                  else
                                  <br />
                                  &nbsp; &nbsp; &nbsp;print("Item not found.")
                                </strong>
                              </p>
                              <p>
                                <strong>Q1.</strong> Type the following code
                                into Python and get it working.
                              </p>
                              <p>
                                <strong>
                                  <img
                                    src="images/d80312fa-d145-444e-93da-bc1f09de3ba2serial1.JPG"
                                    alt="serial1"
                                  />
                                </strong>
                              </p>
                              <p>
                                The top part should be familar to you from
                                earlier lessons. We simply generate a list or
                                random numbers and write a function we can use
                                to print out the list at any time. We generate
                                our list, then ask the user what number they
                                want to search for. We then search for it using
                                the code, which is based directly on the
                                algorithm. We either return the position of the
                                forst instance of the data we are looking for or
                                we return 'Item not found'.
                              </p>
                              <p>
                                <strong>Q2.</strong> Try out the following
                                inputs when you run the code. Before you run
                                each test, try and predict what should happen.
                              </p>
                              <p style="margin-left: 30px">
                                <strong>
                                  20 items in the list and search for 5.
                                </strong>
                                <br />
                                <strong>
                                  20 items in the list and search for 35.
                                </strong>
                                <br />
                                <strong>
                                  0 items in the list and search for 3.
                                </strong>
                                <br />
                                <strong>
                                  0 items in the list and search for 64.
                                </strong>
                              </p>
                              <p>
                                <strong>Q3.</strong> Try altering the program
                                slightly:
                              </p>
                              <p style="margin-left: 30px">
                                <strong>
                                  Try generating a smaller range of numbers and
                                  running some tests with different inputs.
                                </strong>
                                <br />
                                <strong>
                                  Try generating a larger range of numbers and
                                  running some tests with different
                                  inputs.&nbsp;&nbsp;
                                </strong>
                              </p>
                              <p>
                                <strong>Extension task</strong>
                                <br />
                                Modify your program so that it asks the user for
                                an animal and then searches through a list of
                                animals.
                              </p>
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

export default A_serial_search_program_from_the_algorithm;
