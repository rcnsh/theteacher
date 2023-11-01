import React from "react";

function Nesting() {
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
                              <h1
                                class="ContentHeading"
                                style="text-align: center"
                                align="center"
                              >
                                Nesting
                              </h1>
                              <p>
                                <strong class="NormalContentHeading">
                                  Nested IF-THEN-ELSE-ENDIF
                                </strong>
                                <br />
                                <span class="NormalContent">
                                  Not only can you make selections using the IF
                                  construct, you can also put them inside each
                                  other!&nbsp; When we do this, we say that the
                                  IF instructions are nested. Nesting is a very
                                  useful technique so long as the code is laid
                                  out correctly and you don’t use too many
                                  nested IF statements. Consider this example
                                  that uses nested IF statements.
                                </span>
                              </p>

                              <p style="margin-left: 30px">
                                <strong>INPUT ExamMark</strong>
                                <br />
                                <strong>IF (ExamMark &lt; 40) THEN</strong>
                                <br />
                                <strong>
                                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; PRINT "You have
                                  failed."
                                </strong>
                                <br />
                                <strong> ELSE</strong>
                                <br />
                                <strong>
                                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; IF (ExamMark
                                  &lt; 60) THEN{" "}
                                </strong>
                                <br />
                                <strong>
                                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                  PRINT "You have passed."
                                </strong>
                                <br />
                                <strong>
                                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; ELSE
                                </strong>
                                <br />
                                <strong>
                                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                  IF (ExamMark&nbsp; &lt; 70) THEN
                                </strong>
                                <br />
                                <strong>
                                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                  PRINT "You have passed with a merit."
                                </strong>
                                <br />
                                <strong>
                                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                  ELSE
                                </strong>
                                <br />
                                <strong>
                                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                  IF (ExamMark &lt;80) THEN
                                </strong>
                                <br />
                                <strong>
                                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                  PRINT "You have passed with a distinction."
                                </strong>
                                <br />
                                <strong>
                                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                  ELSE
                                </strong>
                                <br />
                                <strong>
                                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                  PRINT "Outstanding! You have passed with
                                  honours!"
                                </strong>
                                <br />
                                <strong>
                                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                  ENDIF
                                </strong>
                                <br />
                                <strong>
                                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                  ENDIF
                                </strong>
                                <br />
                                <strong>
                                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; ENDIF
                                </strong>
                                <br />
                                <strong> ENDIF</strong>
                              </p>
                              <p>
                                <span class="NormalContentHeading">
                                  <strong>Nested iteration</strong>
                                </span>
                                <br />
                                <span class="NormalContent">
                                  You can nest any combination of iterative
                                  constructs as well. Have a look at this
                                  pseudo-code program:
                                </span>
                              </p>
                              <p style="margin-left: 30px">
                                <strong>
                                  Declare Num1, Num2, Multiplier, Answer,
                                  Counter As Integer
                                </strong>
                              </p>
                              <p style="margin-left: 30px">
                                <strong>Multipler = 2</strong>
                                <br />
                                <strong>Num1 = 1</strong>
                                <br />
                                <strong> Num2 = 10</strong>
                              </p>
                              <p style="margin-left: 30px">
                                <strong>Do While Multiplier &lt; 4 </strong>
                                <br />
                                <strong>
                                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; For Counter =
                                  Num1 to Num2
                                  <br />
                                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                  Answer = Counter * Multiplier
                                </strong>
                                <br />
                                <strong>
                                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                  Add_to_the_display: Counter &amp; "Times"
                                  &amp; Multiplier &amp; " = " &amp; Answer
                                  <br />
                                  &nbsp;&nbsp;&nbsp; Next Counter
                                  <br />
                                  &nbsp;&nbsp;&nbsp;&nbsp; Multiplier =
                                  Mulitplier + 1<br />
                                  Loop
                                </strong>
                              </p>
                              <p>
                                You can see in this example that there is a For
                                loop inside a While loop. To put this another
                                way, we have one iterative construction inside
                                another one. They are 'nested'.
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

export default Nesting;
