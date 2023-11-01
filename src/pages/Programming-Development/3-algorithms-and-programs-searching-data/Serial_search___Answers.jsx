import React from "react";

function Serial_search___Answers() {
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
                                Serial search - Answers
                              </h1>
                              <p>
                                Here are the two programs that students were ask
                                to get working. You can copy and paste them
                                straight into Python.
                              </p>

                              <p>
                                <span style="text-decoration: underline">
                                  <strong>
                                    Searching through a list of numbers
                                    <br />
                                  </strong>
                                </span>
                                <strong>import random</strong>
                              </p>
                              <p>
                                <strong>
                                  #This code creates a list of random numbers
                                </strong>
                                <br />
                                <strong>
                                  myList = [] # create an empty list
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
                                  myList.append(random.randint(1,10)) # get a
                                  random number and append it to the list
                                </strong>
                              </p>
                              <p>
                                <strong>
                                  #This function prints out the list.
                                </strong>
                                <br />
                                <strong>def printList(anyList):</strong>
                                <br />
                                <strong>
                                  &nbsp; &nbsp; for i in range(len(anyList)): #
                                  for i= 0 to (size-1)
                                </strong>
                                <br />
                                <strong>
                                  &nbsp; &nbsp; &nbsp; &nbsp;
                                  print(anyList[i],end=' ')
                                </strong>
                                <br />
                                <strong>&nbsp; &nbsp; print('\n')</strong>
                              </p>
                              <p>
                                <strong>
                                  hunted = int(input("What number do you want to
                                  search for? &gt;&gt;&gt; "))
                                </strong>
                                <br />
                                <strong>printList(myList)</strong>
                              </p>
                              <p>
                                <strong>index = 0</strong>
                                <br />
                                <strong>found = False</strong>
                              </p>
                              <p>
                                <strong>
                                  while (index &lt; len(myList)) and (found ==
                                  False):
                                </strong>
                                <br />
                                <strong>
                                  &nbsp; &nbsp; if (myList[index] == hunted):
                                </strong>
                                <br />
                                <strong>
                                  &nbsp; &nbsp; &nbsp; &nbsp; found = True
                                </strong>
                                <br />
                                <strong>&nbsp; &nbsp; else:</strong>
                                <br />
                                <strong>
                                  &nbsp; &nbsp; &nbsp; &nbsp; index = index + 1
                                </strong>
                              </p>
                              <p>
                                <strong>if (found == True):</strong>
                                <br />
                                <strong>
                                  &nbsp; &nbsp; print("Item found at
                                  position",index) # remember to count from
                                  position 0 !!
                                </strong>
                                <br />
                                <strong>else:</strong>
                                <br />
                                <strong>
                                  &nbsp; &nbsp; print("Item not found.")
                                </strong>
                              </p>
                              <p>
                                <strong>&nbsp;</strong>
                              </p>
                              <p>&nbsp;</p>
                              <p>
                                <span style="text-decoration: underline">
                                  <strong>Searching a list of animals</strong>
                                </span>
                                <br />
                                <strong>
                                  <span style="line-height: 1.5">
                                    myList=["adder", "zebra", "lion", "rat",
                                    "koala bear", "monkey", "shark", "ant"]
                                  </span>
                                </strong>
                              </p>
                              <p>
                                <strong>
                                  #This function prints out the list.
                                </strong>
                                <br />
                                <strong>def printList(anyList):</strong>
                                <br />
                                <strong>
                                  &nbsp; &nbsp; for i in range(len(anyList)): #
                                  for i= 0 to (size-1)
                                </strong>
                                <br />
                                <strong>
                                  <strong>&nbsp; &nbsp;&nbsp;</strong>
                                  <strong>&nbsp; &nbsp;&nbsp;</strong>
                                  print(anyList[i],end=' ')
                                </strong>
                                <br />
                                <strong>
                                  <strong>&nbsp; &nbsp;&nbsp;</strong>
                                  print('\n')
                                </strong>
                              </p>
                              <p>
                                <strong>
                                  hunted = input("What animal do you want to
                                  search for? &gt;&gt;&gt; ")
                                </strong>
                                <br />
                                <strong>printList(myList)</strong>
                              </p>
                              <p>
                                <strong>index = 0</strong>
                                <br />
                                <strong>found = False</strong>
                              </p>
                              <p>
                                <strong>
                                  while (index &lt; len(myList)) and (found ==
                                  False):
                                </strong>
                                <br />
                                <strong>
                                  <strong>&nbsp; &nbsp;&nbsp;</strong>if
                                  (myList[index] == hunted):
                                </strong>
                                <br />
                                <strong>
                                  <strong>&nbsp; &nbsp;&nbsp;</strong>
                                  <strong>&nbsp; &nbsp;&nbsp;</strong>found =
                                  True
                                </strong>
                                <br />
                                <strong>
                                  <strong>&nbsp; &nbsp;&nbsp;</strong>else:
                                </strong>
                                <br />
                                <strong>
                                  <strong>
                                    &nbsp; &nbsp; &nbsp; &nbsp;&nbsp;
                                  </strong>
                                  index = index + 1
                                </strong>
                              </p>
                              <p>
                                <strong>if (found == True):</strong>
                                <br />
                                <strong>
                                  <strong>&nbsp; &nbsp;&nbsp;</strong>
                                  print("Item found at position",index) #
                                  remember to count from position 0 !!
                                </strong>
                                <br />
                                <strong>else:</strong>
                                <br />
                                <strong>
                                  <strong>&nbsp; &nbsp;&nbsp;</strong>
                                  print("Item not found.")
                                </strong>
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

export default Serial_search___Answers;
