import React from "react";

function Implementing_our_algorithm_in_Python_to_generate_data___Answers() {
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
                                Implementing our algorithm in Python to generate
                                data - Answers&nbsp;
                              </h1>

                              <p style="margin-bottom: 10px">
                                Here is the code for the program, which can be
                                copied straight into Python:
                              </p>
                              <p style="margin-left: 30px">
                                <strong>
                                  import random # get the random number
                                  generator
                                </strong>
                              </p>
                              <p style="margin-left: 30px">
                                <strong>
                                  myArray = [] # create an empty list
                                </strong>
                                <br />
                                <strong>
                                  size = int(input('How many data items?
                                  &gt;&gt;&gt; ')) # ask for the size required
                                </strong>
                                <br />
                                <strong>
                                  for i in range(size): # for i= 0 to (size-1)
                                </strong>
                                <br />
                                <strong>
                                  &nbsp; &nbsp;
                                  myArray.append(random.randint(1,500)) # get a
                                  random number and append it
                                </strong>
                              </p>
                              <p style="margin-left: 30px">
                                <strong>
                                  for i in range(size): # for i= 0 to (size-1)
                                </strong>
                                <br />
                                <strong>
                                  &nbsp; &nbsp; print(myArray[i],end=' ') #
                                  print what you find at that position
                                </strong>
                              </p>
                              <p style="margin-bottom: 10px">In these lines:</p>
                              <p style="margin-left: 30px">
                                <strong>
                                  for i in range(size): # for i= 0 to (size-1)
                                </strong>
                                <br />
                                <strong>
                                  &nbsp; &nbsp; &nbsp; print(myArray[i],end=' ')
                                  # print what you find at that position
                                </strong>
                                &nbsp;
                              </p>
                              <p style="margin-bottom: 10px">
                                <strong>i</strong> is used to pick out the data
                                at each element in the line
                                <strong>
                                  &nbsp;print(myArray[i],end=' ') # print what
                                  you find at that position
                                </strong>
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

export default Implementing_our_algorithm_in_Python_to_generate_data___Answers;
