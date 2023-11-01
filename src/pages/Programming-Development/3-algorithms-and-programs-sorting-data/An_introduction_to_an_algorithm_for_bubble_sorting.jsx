import React from "react";

function An_introduction_to_an_algorithm_for_bubble_sorting() {
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
                                An introduction to an algorithm for bubble
                                sorting
                              </h1>

                              <p>
                                <img
                                  style="float: left"
                                  src="images/6fb02a77-edcc-4da1-b86c-09eb7b6541b9Bubble-sort-example.gif"
                                  alt="Bubble-sort-example"
                                />
                                Bubble sorting is a method of sorting data. The
                                idea is that you make multiple passes through
                                data. A pass through the data consists of making
                                a set of comparisons between two data items. You
                                always start with the items in position 0 and 1,
                                then 1 and 2, then 2 and 3 etc and each time,
                                you compare them and swap them if necessary.
                                After you have made a pass through all of the
                                data, the biggest piece of data will be in the
                                correct place. It has 'bubbled up' to the
                                surface, so to speak, which is where this
                                algorithm gets it name from.
                              </p>
                              <p>
                                You then make another pass through all of the
                                data as before, except this time, there will be
                                one less comparison to make as the data on the
                                right will be in the correct position. In fact,
                                after each pass, you will always put one more
                                piece of data into the right place and need to
                                do one less comparison the next time! You can
                                see how this works in the animation from
                                Wikipedia on the left.
                              </p>
                              <p>
                                Here is the first complete pass through the data
                                6, 5, 3, 1, 8, 7, 2, 4
                              </p>
                              <table style="width: 70%" border="2">
                                <tbody>
                                  <tr style="background-color: #ffff99">
                                    <td style="width: 5%; text-align: center">
                                      <strong>6</strong>
                                    </td>
                                    <td style="width: 5%; text-align: center">
                                      <strong>5</strong>
                                    </td>
                                    <td style="width: 5%; text-align: center">
                                      <strong>3</strong>
                                    </td>
                                    <td style="width: 5%; text-align: center">
                                      <strong>1</strong>
                                    </td>
                                    <td style="width: 5%; text-align: center">
                                      <strong>8</strong>
                                    </td>
                                    <td style="width: 5%; text-align: center">
                                      <strong>7</strong>
                                    </td>
                                    <td style="width: 5%; text-align: center">
                                      <strong>2</strong>
                                    </td>
                                    <td style="width: 5%; text-align: center">
                                      <strong>4</strong>
                                    </td>
                                    <td style="width: 30%; text-align: center">
                                      <strong>Original data&nbsp;</strong>
                                    </td>
                                  </tr>
                                  <tr>
                                    <td
                                      style="
                                    background-color: #f7a1a1;
                                    text-align: center;
                                  "
                                    >
                                      5
                                    </td>
                                    <td
                                      style="
                                    background-color: #f7a1a1;
                                    text-align: center;
                                  "
                                    >
                                      6
                                    </td>
                                    <td style="text-align: center">3&nbsp;</td>
                                    <td style="text-align: center">1&nbsp;</td>
                                    <td style="text-align: center">8&nbsp;</td>
                                    <td style="text-align: center">7&nbsp;</td>
                                    <td style="text-align: center">2&nbsp;</td>
                                    <td style="text-align: center">4&nbsp;</td>
                                    <td style="text-align: center">
                                      Swap 6 and 5&nbsp;
                                    </td>
                                  </tr>
                                  <tr>
                                    <td style="text-align: center">5</td>
                                    <td
                                      style="
                                    background-color: #f7a1a1;
                                    text-align: center;
                                  "
                                    >
                                      &nbsp;3
                                    </td>
                                    <td
                                      style="
                                    background-color: #f7a1a1;
                                    text-align: center;
                                  "
                                    >
                                      6&nbsp;
                                    </td>
                                    <td style="text-align: center">1&nbsp;</td>
                                    <td style="text-align: center">8&nbsp;</td>
                                    <td style="text-align: center">7&nbsp;</td>
                                    <td style="text-align: center">2&nbsp;</td>
                                    <td style="text-align: center">4&nbsp;</td>
                                    <td style="text-align: center">
                                      &nbsp;
                                      <span
                                        style="
                                      font-family: Verdana, Arial, Helvetica,
                                        sans-serif;
                                      font-size: 11px;
                                      line-height: normal;
                                      text-align: center;
                                    "
                                      >
                                        Swap 6 and 3&nbsp;
                                      </span>
                                    </td>
                                  </tr>
                                  <tr>
                                    <td style="text-align: center">5</td>
                                    <td style="text-align: center">
                                      &nbsp;3&nbsp;
                                    </td>
                                    <td
                                      style="
                                    background-color: #f7a1a1;
                                    text-align: center;
                                  "
                                    >
                                      1
                                    </td>
                                    <td
                                      style="
                                    background-color: #f7a1a1;
                                    text-align: center;
                                  "
                                    >
                                      6
                                    </td>
                                    <td style="text-align: center">8&nbsp;</td>
                                    <td style="text-align: center">7&nbsp;</td>
                                    <td style="text-align: center">2&nbsp;</td>
                                    <td style="text-align: center">4&nbsp;</td>
                                    <td style="text-align: center">
                                      &nbsp;
                                      <span
                                        style="
                                      font-family: Verdana, Arial, Helvetica,
                                        sans-serif;
                                      font-size: 11px;
                                      line-height: normal;
                                      text-align: center;
                                    "
                                      >
                                        Swap 6 and 1&nbsp;
                                      </span>
                                    </td>
                                  </tr>
                                  <tr>
                                    <td style="text-align: center">5</td>
                                    <td style="text-align: center">3</td>
                                    <td style="text-align: center">1&nbsp;</td>
                                    <td
                                      style="
                                    background-color: #f7a1a1;
                                    text-align: center;
                                  "
                                    >
                                      &nbsp;6&nbsp;
                                    </td>
                                    <td
                                      style="
                                    background-color: #f7a1a1;
                                    text-align: center;
                                  "
                                    >
                                      8&nbsp;
                                    </td>
                                    <td style="text-align: center">7&nbsp;</td>
                                    <td style="text-align: center">2&nbsp;</td>
                                    <td style="text-align: center">4&nbsp;</td>
                                    <td style="text-align: center">
                                      Don't swap&nbsp;
                                    </td>
                                  </tr>
                                  <tr>
                                    <td style="text-align: center">5</td>
                                    <td style="text-align: center">3</td>
                                    <td style="text-align: center">1</td>
                                    <td style="text-align: center">6</td>
                                    <td
                                      style="
                                    background-color: #f7a1a1;
                                    text-align: center;
                                  "
                                    >
                                      7&nbsp;
                                    </td>
                                    <td
                                      style="
                                    background-color: #f7a1a1;
                                    text-align: center;
                                  "
                                    >
                                      8
                                    </td>
                                    <td style="text-align: center">2&nbsp;</td>
                                    <td style="text-align: center">4&nbsp;</td>
                                    <td style="text-align: center">
                                      &nbsp;
                                      <span
                                        style="
                                      font-family: Verdana, Arial, Helvetica,
                                        sans-serif;
                                      font-size: 11px;
                                      line-height: normal;
                                      text-align: center;
                                    "
                                      >
                                        Swap 8 and 7&nbsp;
                                      </span>
                                    </td>
                                  </tr>
                                  <tr>
                                    <td style="text-align: center">5</td>
                                    <td style="text-align: center">3</td>
                                    <td style="text-align: center">1</td>
                                    <td style="text-align: center">6</td>
                                    <td style="text-align: center">7</td>
                                    <td
                                      style="
                                    background-color: #f7a1a1;
                                    text-align: center;
                                  "
                                    >
                                      2
                                    </td>
                                    <td
                                      style="
                                    background-color: #f7a1a1;
                                    text-align: center;
                                  "
                                    >
                                      8&nbsp;
                                    </td>
                                    <td style="text-align: center">4&nbsp;</td>
                                    <td style="text-align: center">
                                      &nbsp;
                                      <span
                                        style="
                                      font-family: Verdana, Arial, Helvetica,
                                        sans-serif;
                                      font-size: 11px;
                                      line-height: normal;
                                      text-align: center;
                                    "
                                      >
                                        Swap 8 and 2&nbsp;
                                      </span>
                                    </td>
                                  </tr>
                                  <tr>
                                    <td style="text-align: center">5</td>
                                    <td style="text-align: center">3</td>
                                    <td style="text-align: center">1</td>
                                    <td style="text-align: center">6</td>
                                    <td style="text-align: center">7</td>
                                    <td style="text-align: center">2</td>
                                    <td
                                      style="
                                    background-color: #f7a1a1;
                                    text-align: center;
                                  "
                                    >
                                      4&nbsp;
                                    </td>
                                    <td
                                      style="
                                    background-color: #f7a1a1;
                                    text-align: center;
                                  "
                                    >
                                      8&nbsp;
                                    </td>
                                    <td style="text-align: center">
                                      &nbsp;
                                      <span
                                        style="
                                      font-family: Verdana, Arial, Helvetica,
                                        sans-serif;
                                      font-size: 11px;
                                      line-height: normal;
                                      text-align: center;
                                    "
                                      >
                                        Swap 8 and 4&nbsp;
                                      </span>
                                    </td>
                                  </tr>
                                </tbody>
                              </table>
                              <p>Note the following:</p>
                              <p style="margin-left: 30px">
                                <strong>
                                  1. You can see that as soon as you find the
                                  biggest value, that will always be part of the
                                  pair of comparisons you do in that pass.{" "}
                                </strong>
                                <br />
                                <strong>
                                  2. The value 8 is now in the correct position.{" "}
                                </strong>
                                <br />
                                <strong>
                                  3. We started with 8 pieces of data, and had
                                  to do 7 comparisons in the first pass.&nbsp;
                                </strong>
                                <br />
                                <strong>
                                  4. After one pass, the biggest piece of data
                                  is in the correct position.
                                </strong>
                                <br />
                                <strong>
                                  5. If we had n pieces of data, we would need
                                  to make n-1 comparisons in the first pass.
                                </strong>
                                <br />
                                <strong>
                                  6. Next time, for the second pass, we only
                                  have to do 6 comparisons.&nbsp;
                                </strong>
                                <br />
                                <strong>
                                  7. After two passes, the two biggest pieces of
                                  data are in the correct position.
                                </strong>
                                <br />
                                <strong>
                                  8. If we had n pieces of data, we&nbsp;would
                                  need to make n-2 comparisons in the second
                                  pass.
                                </strong>
                                <br />
                                <strong>
                                  9. In the second pass. we will start with the
                                  first two pieces of data as before, but just
                                  do one less comparison at the end.
                                </strong>
                                <br />
                                <strong>
                                  10. Next time, for the third pass, we only
                                  have to do 5 comparisons.&nbsp;
                                </strong>
                                <br />
                                <strong>
                                  11. After three passes, the three biggest
                                  pieces of data are in the correct position.
                                </strong>
                                <br />
                                <strong>
                                  12.&nbsp;If we had n pieces of data,
                                  we&nbsp;would need to make n-3 comparisons in
                                  the third pass.
                                  <br />
                                  <strong>
                                    13. In the third pass. we will start with
                                    the first two pieces of data as before, but
                                    just do two less comparisons at the end.
                                  </strong>
                                  <br />
                                </strong>
                              </p>
                              <p>
                                Bubble sorts are quite slow compared to
                                insertion sorts. If you remember, we have
                                already said that the efficiency of a sorting
                                algorithm is related to how many comparisons you
                                have to do. The more you have to do, the longer
                                your program code takes to run. You usually have
                                to do a lot more comparisons in bubble sorting
                                than insertion sorting.
                              </p>
                              <p>
                                <span style="line-height: 1.5">&nbsp;</span>
                              </p>
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

export default An_introduction_to_an_algorithm_for_bubble_sorting;
