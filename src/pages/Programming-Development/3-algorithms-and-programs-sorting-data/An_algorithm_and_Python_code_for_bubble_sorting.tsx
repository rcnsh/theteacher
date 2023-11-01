import React from "react";

function An_algorithm_and_Python_code_for_bubble_sorting() {
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
                                An algorithm and Python code for bubble sorting
                              </h1>
                              <p>
                                The algorithm for a bubble sort is perhaps a
                                little easier to understand than the insertion
                                sort algorithm. A first attempt might be
                                something like this:
                              </p>

                              <p>
                                <strong>We get a list.</strong>
                                <br />
                                <strong>
                                  We then need to get the length of the list and
                                  subtract 1 from it, to give the number of
                                  passes we need to do.
                                </strong>
                                <br />
                                <strong>For each pass:</strong>
                                <br />
                                <strong>
                                  &nbsp; &nbsp; we need to check pairs of
                                  elements in turn until there are no more
                                  pairs, starting with the first pair.
                                </strong>
                                <br />
                                <strong>
                                  &nbsp; &nbsp; If we need to swap them
                                </strong>
                                <br />
                                <strong>
                                  &nbsp; &nbsp; &nbsp; &nbsp; swap them!
                                </strong>
                              </p>
                              <p>
                                If we wrote this in Python, we would probably
                                produce code similar to this:
                              </p>
                              <p>
                                <strong>def bubble(myList):</strong>
                                <br />
                                <strong>
                                  &nbsp; &nbsp; for passnumber in
                                  range(len(myList)-1,0,-1):
                                </strong>
                                <br />
                                <strong>
                                  &nbsp; &nbsp; &nbsp; &nbsp; for i in
                                  range(passnumber):
                                </strong>
                                <br />
                                <strong>
                                  &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; if
                                  myList[i]&gt;myList[i+1]:
                                </strong>
                                <br />
                                <strong>
                                  &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                                  &nbsp; &nbsp; temp = myList[i]
                                </strong>
                                <br />
                                <strong>
                                  &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                                  &nbsp; &nbsp;myList[i] = myList[i+1]
                                </strong>
                                <br />
                                <strong>
                                  &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                                  &nbsp; &nbsp;myList[i+1] = temp
                                </strong>
                              </p>
                              <p>
                                <strong>
                                  anyList = [54,26,93,17,77,31,44,55,20]
                                </strong>
                                <br />
                                <strong>
                                  bubble(anyList)
                                  <br />
                                </strong>
                                <strong>print(anyList)</strong>
                              </p>
                              <p>
                                Here, we have defined a bubble function called
                                bubble. To call it, we just state the name and
                                what list we want to use. We then print it out.
                              </p>
                              <p>
                                <strong>Q1.</strong> Type the above code in and
                                get it working.
                                <br />
                                <strong>Q2.</strong> Change the data in the list
                                and check it still works.
                                <br />
                                <strong>Q3.</strong>
                                Using the code you used when you studied
                                insertion sorting, generate a random set of data
                                and use that rather than the fixed set of data
                                used in the above example.
                                <br />
                                <strong>Q4.</strong> Print out the list after
                                each comparison between two data items,&nbsp;by
                                using the code you used when you studied
                                insertion sorting.
                              </p>
                              <p>
                                <strong>Extension task</strong>
                                <br />
                                <strong>a)</strong>
                                Modify your program so that you generate some
                                random data, then sort that data using both
                                insertion sort and the same data using bubble
                                sort. You should print out the results after
                                each pass, so you can see how each method of
                                sorting worked.
                              </p>
                              <p>
                                To do this, you must create a list of data. You
                                must then copy it twice, and use one copy for
                                the bubble sort and the other copy for the
                                insertion sort. You can easily make duplicates
                                of lists in Python. If your original list of
                                data is called anyList, then to make two new
                                lists, do this:
                              </p>
                              <p style="margin-left: 30px">
                                <strong>anyList1 = anyList[:]</strong>
                                <br />
                                <strong>anyList2 = anyList[:]</strong>
                              </p>
                              <p>
                                Now you would use anyList1 for the bubble sort
                                and anyList2 for the insertion sort.
                              </p>
                              <p>
                                <strong style="line-height: 1.5">b)</strong>
                                <span style="line-height: 1.5">
                                  Repeat the above experiment using a fixed list
                                  of animals rather than numbered data. Remember
                                  to duplicate the list of animals.
                                </span>
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

export default An_algorithm_and_Python_code_for_bubble_sorting;
