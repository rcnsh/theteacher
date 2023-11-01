import React from "react";

function Manipulating_Boolean_using_Karnaugh_maps___part_1() {
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
                                Manipulating Boolean using Karnaugh maps - part
                                1
                              </h1>
                              <p class="NormalContent">
                                <strong>
                                  <strong>
                                    Introduction
                                    <br />
                                  </strong>
                                </strong>
                                A Karnaugh map gives you a visual method of
                                simplifying a Boolean expression. You construct
                                a table of cells, and each cell represents a
                                possible combination on inputs into a system.
                                The table cells are arranged in a special way,
                                so that each cell's input combination is
                                different to the cells next to it by just one
                                bit and only one bit. This kind of organisation
                                is called Gray code. By completing the table,
                                you can spot immediately where some terms in a
                                Boolean expression are redundant and can then
                                simplify it. This is best understood by working
                                through some examples.
                              </p>

                              <p class="NormalContent">
                                <strong>Constructing the map</strong>
                                <br />
                                The size and layout of a Karnaugh map depends
                                upon how many inputs your have. We have already
                                said that a
                                <span style="line-height: 16.3636360168457px">
                                  &nbsp;table's cells are arranged in a special
                                  way, so that each cell's input combination is
                                  different to the cells next to it by just one
                                  bit and only one bit. Study the following
                                  Karnaugh maps for two, three and four inputs.
                                </span>
                              </p>
                              <p class="NormalContent">
                                <span style="line-height: 16.3636360168457px">
                                  <img
                                    style="vertical-align: middle"
                                    src="images/6cff811d-76d5-48f5-8b91-1b0dc84d3720karn1.GIF"
                                    alt="karn1"
                                    width="400"
                                    height="402"
                                  />
                                </span>
                              </p>
                              <p class="NormalContent">
                                The cells are not in binary order. They are
                                organised so that the cells next any particular
                                one differ by just one bit. You can also think
                                of the map as 'wrapping around' itself. In other
                                words, the
                                <strong>
                                  <em>right</em>{" "}
                                </strong>
                                most cell differs to the{" "}
                                <strong>
                                  <em>left</em>{" "}
                                </strong>
                                most cell in any row by just one bit, and the
                                <strong>
                                  <em>top</em>{" "}
                                </strong>
                                cell in a column differs by just one bit to the
                                cell in the
                                <strong>
                                  <em>bottom</em>
                                </strong>{" "}
                                of that column. The value contained in any cell
                                is given by its row and then column value. For
                                example, the pink cell shown here:
                              </p>
                              <p class="NormalContent">
                                <img
                                  src="images/f19d8bc9-bfdc-4050-92a4-eba394b37561karn2.GIF"
                                  alt="karn2"
                                  width="430"
                                  height="131"
                                />
                              </p>
                              <p class="NormalContent">
                                has a value 101 (row 1, column 01).
                              </p>
                              <p class="NormalContent">
                                <strong>
                                  An example of using a Karnaugh map
                                </strong>
                                <br />
                                Let's look at an example to see how Karnaugh
                                maps are used. Consider this truth table that we
                                want to produce a simplified Boolean expression
                                for:
                              </p>
                              <p class="NormalContent">
                                <img
                                  style="vertical-align: middle"
                                  src="images/80f039aa-191e-44db-86bc-a7d2ffb14257karn3truth.GIF"
                                  alt="karn3truth"
                                  width="140"
                                  height="212"
                                />
                              </p>
                              <p class="NormalContent">
                                Let's work out what the Boolean expression is
                                for this truth table:
                              </p>
                              <p class="NormalContent">
                                <img
                                  style="vertical-align: middle"
                                  src="images/9d10b879-ed5e-40b3-abc7-4d3e2f4c1133karn7.GIF"
                                  alt="karn7"
                                  width="340"
                                  height="115"
                                />
                              </p>
                              <p class="NormalContent">
                                Is this the simplest form of the equation? Is
                                there a better way of deriving this
                                equation?&nbsp;We will use a Karnaugh to
                                investigate!&nbsp;
                              </p>
                              <p class="NormalContent">
                                First, we need to construct the correct table
                                for three inputs. Then, wherever a 1 occured in
                                the truth table, we have to find the
                                corresponding cell in our Karnaugh table and put
                                a 1 in it. That gives us:
                              </p>
                              <p class="NormalContent">
                                <img
                                  style="vertical-align: middle"
                                  src="images/e81d9bac-e361-4017-bebd-085f72aa864ckarn4.GIF"
                                  alt="karn4"
                                  width="180"
                                  height="107"
                                />
                              </p>
                              <p class="NormalContent">
                                Now, if there are ones in two cells next to each
                                other, that means that there is some redundancy
                                in the system! What you have to do is:
                              </p>
                              <ul>
                                <li style="list-style-type: none">
                                  <ul>
                                    <li class="NormalContent">
                                      group ones together in squares and
                                      rectangles in groups of one, two, four,
                                      eight, sixteen etc (powers of 2).
                                    </li>
                                    <li class="NormalContent">
                                      ensure that the total number of groups is
                                      as small as possible
                                    </li>
                                    <li class="NormalContent">
                                      make groups as large as you can.
                                    </li>
                                  </ul>
                                </li>
                              </ul>
                              <p class="NormalContent">
                                If we follow the rules above for our example, we
                                can identify two groups of two cells:
                              </p>
                              <p class="NormalContent">
                                <img
                                  style="vertical-align: middle"
                                  src="images/f5f855a1-45f5-4160-b611-78c39e6376c8karn5.GIF"
                                  alt="karn5"
                                  width="180"
                                  height="107"
                                />
                              </p>
                              <p class="NormalContent">
                                We then look at each group in turn. Remember,
                                that the output is a 1 in each group. If a bit
                                changes in that group, the output is still a 1.
                                That means that that bit that changed didn't
                                have any effect on the output. It's therefore
                                redundant. We don't need it and can ignore it in
                                the Boolean expression that we then need to
                                construct for that group.
                              </p>
                              <p class="NormalContent">
                                In the top group, bit C changed, so is
                                redundant, as the output was still a 1 in all
                                cells in that grouping.
                                <br />
                                In the lower group, bit A changed, so is
                                redundant
                                <span style="line-height: 16.3636360168457px">
                                  , as the output was still a 1 in all cells in
                                  that grouping.
                                </span>
                              </p>
                              <p class="NormalContent">
                                <img
                                  style="vertical-align: middle"
                                  src="images/8553bdb5-fb82-415d-bbc8-61702240dc39karn6.GIF"
                                  alt="karn6"
                                  width="540"
                                  height="147"
                                />
                              </p>
                              <p class="NormalContent">
                                Finally, we write out all of the Boolean
                                expressions and then OR them. In our example, we
                                get:
                              </p>
                              <p
                                class="NormalContent"
                                style="margin-left: 30px"
                              >
                                <strong>
                                  <span style="text-decoration: overline">
                                    A
                                  </span>
                                  B + AC = Q
                                </strong>
                              </p>
                              <p class="NormalContent">
                                You can see that the output is actually the same
                                as the Boolean expression we worked out from the
                                truth table so in this case, we can say that the
                                Boolean expression is as simplified as it can
                                be.
                              </p>
                              <p class="NormalContent">
                                On a general note, we should obey the following
                                rules when constructing Karnaugh maps:
                              </p>
                              <ul>
                                <li style="list-style-type: none">
                                  <ul>
                                    <li class="NormalContent">
                                      Every cell that has a 1 in it must be
                                      included in at least one group.
                                    </li>
                                    <li class="NormalContent">
                                      Groups may overlap; cells may appear in
                                      more than one group.
                                    </li>
                                    <li class="NormalContent">
                                      Aim for the largest groups possible with
                                      the fewest number of groups.
                                    </li>
                                    <li class="NormalContent">
                                      The bigger the group, the larger the
                                      number of redundant inputs:
                                      <ul>
                                        <li class="NormalContent">
                                          a group of 1 has no redundant inputs.
                                        </li>
                                        <li class="NormalContent">
                                          <span style="line-height: 16.3636360168457px">
                                            a group of 2 has 1 redundant input.
                                          </span>
                                        </li>
                                        <li class="NormalContent">
                                          <span style="line-height: 16.3636360168457px">
                                            a group of 4 has 2 redundant inputs.
                                          </span>
                                        </li>
                                        <li class="NormalContent">
                                          <span style="line-height: 16.3636360168457px">
                                            a group of 8 has 4 redundant inputs.
                                          </span>
                                        </li>
                                        <li class="NormalContent">
                                          a group of 16 has 8 redundant inputs.
                                        </li>
                                      </ul>
                                    </li>
                                    <li class="NormalContent">
                                      <span style="line-height: 16.3636360168457px">
                                        Groups can have 1, 2, 4, 8 etc cells
                                        (powers of 2).
                                      </span>
                                    </li>
                                    <li class="NormalContent">
                                      Groups can wrap around right to left, up
                                      to down but must always be square or
                                      rectangular.&nbsp;
                                    </li>
                                  </ul>
                                </li>
                              </ul>
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

export default Manipulating_Boolean_using_Karnaugh_maps___part_1;
