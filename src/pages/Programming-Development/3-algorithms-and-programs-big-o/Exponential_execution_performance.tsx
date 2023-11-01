import React from "react";

function Exponential_execution_performance() {
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
                                Exponential execution performance&nbsp;O(2
                                <sup>N</sup>)
                              </h1>
                              <p>
                                <strong style="line-height: 1.5">
                                  <strong style="line-height: 1.5">
                                    Exponential execution time O(2<sup>N</sup>)
                                    <br />
                                  </strong>
                                </strong>
                                The kind of algorithm represented by&nbsp;
                                <span style="line-height: 16.3636360168457px">
                                  O(2
                                </span>
                                <span
                                  style="
                                bottom: 0.3em;
                                font-size: 0.8em;
                                position: relative;
                                vertical-align: baseline;
                              "
                                >
                                  N
                                </span>
                                <span style="line-height: 16.3636360168457px">
                                  ) is one whose performance will double with
                                  each data element added to it.&nbsp;
                                </span>
                                <span style="line-height: 16.3636360168457px">
                                  We can represent this using a graph:
                                </span>
                              </p>

                              <p>
                                <span style="line-height: 16.3636360168457px">
                                  <img
                                    style="vertical-align: middle"
                                    src="images/67a711f3-0af8-4891-8885-be1ef433366fbogo4.GIF"
                                    alt="bogo4"
                                  />
                                  <br />
                                </span>
                              </p>
                              <p>
                                <span style="line-height: 16.3636360168457px">
                                  <strong>
                                    Programming examples that are O(2
                                    <sup>N</sup>)
                                  </strong>
                                  <br />
                                  Examples that are O(N<sup>2</sup>) include
                                  recursive Fibonacci implementation algoirthms,
                                  implementations of the Towers have
                                  Hanoi.&nbsp;
                                </span>
                              </p>
                              <p>
                                <span style="line-height: 16.3636360168457px">
                                  <strong>Python example</strong>
                                  <br />
                                  Here is the code to work out what the value of
                                  the seventh element is in the Fibonacci
                                  series:
                                </span>
                              </p>
                              <p>
                                <img
                                  style="vertical-align: middle"
                                  src="images/7e8d5993-0c78-4e1d-acf3-b5b9b7fe60fffib.GIF"
                                  alt="fib"
                                />
                              </p>
                              <p class="QuestionStyle">
                                You can change the 7 to any number you want, to
                                return the value of the element in that
                                position. This is an example of an algorithm
                                that can be described as O(2<sup>N</sup>).
                              </p>
                              <p class="QuestionStyle"></p>
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

export default Exponential_execution_performance;
