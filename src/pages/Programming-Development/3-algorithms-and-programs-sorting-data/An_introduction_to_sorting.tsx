import React from "react";

function An_introduction_to_sorting() {
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
                                An introduction to sorting
                              </h1>

                              <p>
                                <img
                                  style="margin: 20px; float: left"
                                  src="images/b66fbeaa-efdf-46ce-9cf1-c1b6d6834926cards.gif"
                                  alt="cards"
                                />
                                The term 'sorting' in programming is used to
                                describe putting a collection of data into an
                                order of some kind. You could sort all of the
                                students in your class in order of date of
                                birth, height, exam marks in the last test or
                                alphabetically. When you play some games of
                                cards, you are dealt a set of cards and you have
                                to put them in some kind of order, perhaps from
                                high to low, or in order of suits first and then
                                low to high card values. It is important to know
                                how to sort data in programming because it often
                                speeds up processing data; processing data that
                                is sorted first is often a lot faster than
                                working on and processing data that is unsorted.
                              </p>
                              <p>
                                How data is sorted is quite an important area in
                                Computer Science. Lots of sorting algorithms
                                have been written to sort data. These
                                'algorithms' are simply very precise
                                descriptions of how you can take a set of data
                                items and sort them. Once you have the
                                algorithm, you can then convert it into any
                                programming language you are skilled in. Some of
                                these algorithms are very complicated and in
                                fact, too complicated for just a few data items
                                that need sorting. Other sorting algorithms are
                                very simple and are great for small sets of
                                data, but take a very long time to sort data if
                                the sets of data are large. And then there are
                                compromise sorting algorithms. These are a
                                balance between the advantages and disadvantages
                                of the best and the worst sorting algorithms.
                                How fast a sorting algorithm is for a particular
                                set of data is very important for programmers as
                                they want their programs to run as fast as
                                possible.
                              </p>
                              <p>
                                There are two things we should know about when
                                sorting data. The first thing we need to
                                understand is that to sort data elements, we
                                need to compare them. For example, if I had the
                                two pieces of data 45 and 79, I need to compare
                                them to put them in an order. I need to ask a
                                question like "Is the first piece of data
                                greater than the second" or&nbsp;"Is the first
                                piece of data less than the second". If I have
                                five pieces of data e.g. 42, 76, 5, 49 and 29,
                                then I need to ask the same sort of questions,
                                but again, I can only do this for a pair of data
                                elements. I have to e.g. compare 42 and 76, and
                                then compare 42 and 5, and then compare 42 and
                                49 and so on.
                              </p>
                              <p>
                                The second thing we need to understand is that
                                when we compare data elements, and when we have
                                to swap them around because they are in the
                                wrong order, this takes programming time and
                                ultimately, slows down the whole program. What
                                we want to aim for is to sort our data with as
                                few comparisons as possible and by doing as few
                                swaps of data as possible.
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

export default An_introduction_to_sorting;
