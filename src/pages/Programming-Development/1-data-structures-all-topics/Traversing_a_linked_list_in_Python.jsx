import React from "react";

function Traversing_a_linked_list_in_Python() {
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
                                Traversing&nbsp;a linked list in Python
                              </h1>
                              <p>
                                <strong
                                  class="NormalContentHeading"
                                  style="line-height: 1.5"
                                >
                                  Introduction
                                  <br />
                                </strong>
                                There are a number of operations we might want
                                to carry out on a linked list. These include
                                counting the number of items in a list, printing
                                the data out and searching for a data item. Each
                                of these operations involve
                                <em>
                                  <strong>traversing</strong>
                                </em>{" "}
                                the list, or starting at the beginning and
                                moving along the list, one node at a time. You
                                must always start at the head of a linked list.
                                You then go from the head to the next node, as
                                determined by the pointer. You keep following
                                pointers in each node until you get to the null
                                pointer, which signals that the end of the list
                                has been reached. This is how this kind of data
                                structure is designed to work. You can't just
                                jump to a particular node.
                              </p>

                              <p>
                                <strong
                                  class="NormalContentHeading"
                                  style="line-height: 1.5"
                                >
                                  Counting the data items in a linked list.
                                  <br />
                                </strong>
                                Add the following method to your linkedList
                                class:
                              </p>
                              <p>
                                <strong
                                  class="NormalContentHeading"
                                  style="line-height: 1.5"
                                >
                                  <img
                                    style="vertical-align: middle"
                                    src="images/81c83efd-2988-4613-9f4f-2b4559b69f99count.GIF"
                                    alt="count"
                                    width="330"
                                    height="103"
                                  />
                                </strong>
                              </p>
                              <p>
                                To count the number of data items, we assign
                                <em>
                                  <strong>current</strong>{" "}
                                </em>
                                to the node that the head is pointing to and set
                                a counter to be zero. While we haven't reached
                                the null pointer, we increase the counter by one
                                and then get the next pointer. Finally, we
                                return the value of counter to the main program.
                              </p>
                              <p>
                                <strong>
                                  Printing out the data items in a linked list
                                </strong>
                                <br />
                                Add the following method to your linkedList
                                class:
                              </p>
                              <p>
                                <img
                                  style="vertical-align: middle"
                                  src="images/d5d77d95-4e2d-4f3d-9914-b160c21019a9printout.GIF"
                                  alt="printout"
                                  width="330"
                                  height="77"
                                />
                              </p>
                              <p>
                                To printout the data items,&nbsp;we assign&nbsp;
                                <em>
                                  <strong>current</strong>&nbsp;
                                </em>
                                to the node that the head is pointing to. While
                                we haven't reached the null pointer, we print
                                the data in the current node and then follow the
                                pointer to the next node.
                              </p>
                              <p>
                                <strong>
                                  Searching for a data item in a linked list
                                  <br />
                                </strong>
                                Add the following code to your linkedList class:
                              </p>
                              <p>
                                <img
                                  style="vertical-align: middle"
                                  src="images/7ea57c3e-7066-4289-a455-b3f00e85c5c4found.GIF"
                                  alt="found"
                                  width="360"
                                  height="146"
                                />
                                <br />
                                <br />
                                To search for a data item, we start at the first
                                node (as pointed to by the head). We continue
                                looking until either we get to the null pointer
                                (the end of the list) or we find the data item.
                                If we find the data item, we return True. If the
                                item isn't in the list, we return False.
                              </p>
                              <p>
                                <strong>Testing your linked list</strong>
                                <br />
                                Once you have added the above methods to your
                                linkedList class, you can test them out by
                                adding some extra code. For example:
                              </p>
                              <p>
                                <img
                                  style="vertical-align: middle"
                                  src="images/b875f259-b3ab-418b-8e78-28bbe63c6ea8test.GIF"
                                  alt="test"
                                  width="360"
                                  height="210"
                                />
                              </p>
                              <p>
                                <strong>Use a visualiser</strong>
                                <br />
                                If you are struggling to see what is happening,
                                use a Python visualiser such as&nbsp;
                                <a
                                  href="http://www.pythontutor.com"
                                  target="_blank"
                                >
                                  www.pythontutor.com
                                </a>
                                &nbsp;to help you. Copy and paste the code into
                                the visualiser and step through it, one line at
                                a time.
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

export default Traversing_a_linked_list_in_Python;
