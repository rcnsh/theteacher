import React from "react";

function Understanding_and_using_sequence() {
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
                                Understanding and using sequence
                              </h1>
                              <p>
                                <strong>Introduction</strong>
                                <br />
                                When you look at any high-level language, you
                                can identify the features in the language that
                                make it so powerful. Instructions in a program
                                flow one after another in a sequence. However,
                                there are instructions available that will allow
                                blocks of code to be repeated many times. There
                                are also instructions that allow decisions to be
                                made about which code from a selection of code
                                will be executed. The specific instructions
                                provided by a particular language that allow
                                code to be repeated, or code to be selected from
                                a choice of code, are known as control
                                structures. If we also include the way that
                                instructions flow one after the other, we can
                                say that there are three types of programming
                                construct we need to know about. These are:
                              </p>

                              <ul style="list-style-type: disc">
                                <li style="list-style-type: none">
                                  <ul style="list-style-type: disc">
                                    <li>Sequence.</li>
                                    <li>
                                      Selection. (There are two types of
                                      selection we need to know about.)
                                    </li>
                                    <li>
                                      Iteration, also called 'repetition'.
                                      (There are three types of iteration we
                                      need to know about.)
                                    </li>
                                  </ul>
                                </li>
                              </ul>
                              <p>
                                We can summarise these three constructs with a
                                diagram:
                              </p>
                              <p style="text-align: center">
                                <img
                                  src="images/ffb5761e-f616-4063-9d71-877418db8d1ba.GIF"
                                  alt="a"
                                />
                              </p>
                              <p>
                                <strong>Sequence</strong>
                                <br />
                                There isn't a lot to say about the programming
                                construction 'sequence'. It simply describes one
                                instruction following on from the next
                                instruction. An example of this, in pseudo-code
                                is:
                              </p>
                              <p style="margin-left: 30px">
                                <strong>INITIALISE Variables</strong>
                                <br />
                                <strong>
                                  WRITE ‘Please enter the name of student’
                                </strong>
                                <br />
                                <strong> INPUT Name</strong>
                                <br />
                                <strong>
                                  WRITE ‘Please enter the exam mark of student’
                                </strong>
                                <br />
                                <strong> INPUT ExamMark</strong>
                                <br />
                                <strong> PRINT Name, ExamMark</strong>
                              </p>
                              <p>
                                <strong>&nbsp;</strong>
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

export default Understanding_and_using_sequence;
