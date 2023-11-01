import React from "react";

function An_algorithm_for_generating_a_list_of_numbers() {
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
                                An algorithm for generating a list of numbers
                              </h1>
                              <p>
                                When we are writing code, we often need some
                                data available so we can test what we have
                                written. We can type into our program a set of
                                data to use manually or we could make a list of
                                data and save it on a file and then use that,
                                but we might have to type in thousands of pieces
                                of data. And we might have to run the same test
                                again but with a different set of data! Clearly,
                                we don't want to be typing in lots of data if we
                                can find a way to generate some automatically.
                              </p>

                              <p>
                                An algorithm is simply a very precise
                                description of how to solve a problem. It may be
                                a diagram (like a flowchart) or it may be a
                                description in the form of a set of phrases or
                                sentences. If we can also write those sentences
                                in the style of a programming language, then we
                                have something called 'pseudo-code'. Pseudo-code
                                is really good because it is relatively easy to
                                convert it into any programming language we
                                want. For this reason, we say pseudo-code is
                                'language-independent'.&nbsp;We are going to
                                write an algorithm to produce a set of numbers.
                                We will also include instructions to print out
                                the list, so we can test it works.
                              </p>
                              <p style="margin-left: 30px">
                                <strong>
                                  Import a random number generator.
                                </strong>
                                <br />
                                <strong>
                                  Create an empty list, one with no elements
                                  (pieces of data) in it.
                                </strong>
                                <br />
                                <strong>
                                  Ask the user how many elements they want in
                                  their list
                                </strong>
                                <br />
                                <strong>For each position in the list:</strong>
                                <br />
                                <strong>
                                  &nbsp; &nbsp; &nbsp; generate a random number
                                  and add it on the end of the existing list
                                </strong>
                                <br />
                                <br />
                              </p>
                              <p style="margin-left: 30px">
                                <strong>for each position in the list:</strong>
                                <br />
                                <strong>
                                  &nbsp; &nbsp; &nbsp; print out what is in that
                                  position
                                </strong>
                              </p>
                              <p>
                                <strong>1.</strong> Most programming languages
                                have a box of tools for generating random
                                numbers. These are pre-written, tested and
                                working functions that we can just use. We start
                                our algorithm by importing these tools. <br />
                                <strong>2.</strong> We then create a data
                                structure to hold our data. To start with it
                                will be empty. All languages have data
                                structures and most have one that can be use
                                called a list or an array. It is simply a
                                container that holds data items in positions,
                                usually starting at position 1, then position 2,
                                then position 3 and so on. Each position is
                                called an 'element' and can hold a piece of
                                data. <br />
                                <strong>3.</strong>
                                Next, we need to ask the user how big they want
                                their list, how many elements they want in
                                it.&nbsp;
                                <br />
                                <strong>4.</strong> Then, we start at the first
                                element, generate a random number and add it to
                                the list, and we do this for every element up to
                                the size that the user wanted.
                              </p>
                              <p>
                                This fills an array with data items! To print
                                it, so we can see what happened, we do the
                                following:
                              </p>
                              <p>
                                <strong>1.</strong> We go to each position in
                                the list in turn, up to the end of the array
                                <br />
                                <strong>2.</strong>
                                We print out what we find there.
                              </p>
                              <p>
                                So that's it. We have an algorithm that
                                precisely describes how to generate a list of
                                data we can use for testing, and how to print it
                                out. As we have said, algorithms written like
                                this are called 'pseudo-code'. What we have
                                written isn't a program we can run, but we can
                                give it to a programmer in any language and they
                                should be able to convert the algorithm into the
                                language that they are skilled in writing.
                              </p>
                              <p>
                                In &nbsp;a sense, it is a little bit like
                                writing a Maths formula to do something e.g. A =
                                πr<sup>2</sup>&nbsp;and then teachers of
                                different nationalities all over the world can
                                use their own languages to explain to their
                                students what this means and how it works. The
                                Maths formula is the algorithm and the teachers
                                then use their own languages to explain
                                it.&nbsp;
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

export default An_algorithm_for_generating_a_list_of_numbers;
