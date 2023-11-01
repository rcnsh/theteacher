import React from "react";

function Recursion() {
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
                              <h1 style="text-align: center" align="center">
                                Recursion
                              </h1>
                              <p class="NormalContent">
                                <strong class="NormalContentHeading">
                                  Introduction
                                </strong>
                                <br />
                                Recursion is the term used to describe when a
                                sub-program calls itself! After every call to
                                itself a test is done. This checks to see if the
                                sub-program should call itself again. This
                                continues until the test result is such that the
                                recursion (and therefore the calls to itself)
                                ends. Recursion can require a little thought to
                                fully understand the mechanism! Let's look at
                                some examples. The first example is the classic
                                factorial example using functions.
                              </p>

                              <p class="NormalContent">
                                The 'factorial' of a number is arrived at by
                                multiplying every integer from the number down
                                to 1. So, for example,
                              </p>
                              <p style="margin-left: 30px">
                                <strong>
                                  Factorial(6) = 6 x 5 x 4 x 3 x 2 x 1 = 720
                                </strong>
                                <br />
                                <strong>
                                  Factorial(4) = 4 x 3 x 2 x 1 = 24
                                </strong>
                              </p>
                              <p class="QuestionStyle">
                                <span style="line-height: 1.5">
                                  We can define a function that will work out
                                  the factorial of a number, K.
                                </span>
                              </p>
                              <p
                                class="NormalContentHeading"
                                style="margin-left: 30px"
                              >
                                <strong>Function Fact(K)</strong>
                                <br />
                                <strong>BEGIN</strong>
                                <br />
                                <strong> IF K &lt;=1 then</strong>
                                <br />
                                <strong>
                                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Fact := 1
                                </strong>
                                <br />
                                <strong> ELSE</strong>
                                <br />
                                <strong>
                                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Fact := K x
                                  Fact(K-1)
                                </strong>
                                <br />
                                <strong> END</strong>
                              </p>
                              <p class="NormalContent">
                                <strong class="NormalContentHeading">
                                  A worked example
                                </strong>
                                <br />
                                To see how this works, look at the following
                                diagram and then read the description
                                underneath. We want to find out the factorial of
                                3 so we call the function using the instruction
                                Fact(3). Note that we have drawn a box around
                                each call to the function. This helps us to
                                remember the values of the variables. If you are
                                working in a box then you use any variables’
                                values in that box!
                              </p>
                              <p align="center">
                                <img
                                  src="images/62e8ff5f-93a8-415f-8cf4-976a847e4160a.gif"
                                  alt="recurse"
                                />
                                <br />
                                <br />
                              </p>
                              <ul>
                                <li style="list-style-type: none">
                                  <ul style="list-style-type: disc">
                                    <li class="NormalContent">
                                      The function is called using Fact(3).
                                    </li>
                                    <li class="NormalContent">
                                      K is set to 3 in this box.
                                    </li>
                                    <li class="NormalContent">
                                      The test ‘K &lt;= 1’ is FALSE. Therefore
                                      the 'ELSE' part of the selection construct
                                      is done.
                                    </li>
                                    <li class="NormalContent">
                                      A variable called Fact in box 1 is set to
                                      K x Fact(K-1), or 3 x Fact(3-1).
                                    </li>
                                    <li class="NormalContent">
                                      The Fact(3-1) part is a call to the
                                      function Fact using the parameter 3-1, or
                                      2!
                                    </li>
                                    <li class="NormalContent">
                                      We now jump to a new call to the function
                                      using Fact(2).
                                    </li>
                                    <li class="NormalContent">
                                      K is set to 2 in this box.
                                    </li>
                                    <li class="NormalContent">
                                      The test ‘K &lt;= 1’ is FALSE. Therefore
                                      the 'ELSE' part of the selection construct
                                      is done.
                                    </li>
                                    <li class="NormalContent">
                                      A variable called Fact in box 2 is set to
                                      K x Fact(K-1), or 2 x Fact(2-1).
                                    </li>
                                    <li class="NormalContent">
                                      The Fact(2-1) part is a call to the
                                      function Fact using the parameter 2-1, or
                                      1!
                                    </li>
                                    <li>
                                      We now jump to a new call to the function
                                      using Fact(1).
                                    </li>
                                    <li class="NormalContent">
                                      K is set to 1 in this box.
                                    </li>
                                    <li class="NormalContent">
                                      The test ‘K &lt;= 1’ is TRUE. The IF part
                                      is executed and the variable Fact is set
                                      to 1.
                                    </li>
                                    <li class="NormalContent">
                                      The call to box 3 ends and control is
                                      passed back to where the call was made
                                      from.
                                    </li>
                                    <li class="NormalContent">
                                      Don't forget with functions, a value held
                                      in a variable whose name is the same as
                                      the function, is also passed back! So
                                      Fact:=1 is passed back and can replace the
                                      call that was made from box 2. In box 2,
                                      Fact is now set to 2 x 1 = 2.
                                    </li>
                                    <li class="NormalContent">
                                      But box 2 has now finished. The value of
                                      Fact is passed back to replace where the
                                      call was made. So Fact:=2 is passed back
                                      to box 1.
                                    </li>
                                    <li class="NormalContent">
                                      In box 1, Fact is set to 3 x 2 = 6. The
                                      answer to Fact(3) is therefore 6!
                                    </li>
                                  </ul>
                                </li>
                              </ul>
                              <p class="QuestionStyle">
                                <strong
                                  class="NormalContentHeading"
                                  style="line-height: 1.5"
                                >
                                  Another example
                                  <br />
                                </strong>
                                Study the next, totally meaningless procedure!
                                If you can follow how this works, you have a
                                good understanding of recursion that can only
                                get better with experience!
                              </p>
                              <p class="NormalContent">
                                The following procedure called Prog has been
                                written. It accepts 3 values, an Integer and two
                                strings. This recursion example doesn't use a
                                function. It uses a procedure. In this case,
                                values aren't passed back when a call has ended,
                                although there are lots of outputs sent to the
                                output screen.
                              </p>
                              <p
                                class="NormalContentHeading"
                                style="margin-left: 30px"
                              >
                                <strong>
                                  Procedure Prog (n:Integer, S:String, T:String)
                                </strong>
                                <br />
                                <strong> IF n=2 THEN</strong>
                                <br />
                                <strong>
                                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; OUTPUT S "I
                                  really love programming", T
                                </strong>
                                <br />
                                <strong> ELSE</strong>
                                <br />
                                <strong>
                                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Prog (n-2, T,
                                  S)
                                </strong>
                                <br />
                                <strong>
                                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; OUTPUT "Hello",
                                  T
                                </strong>
                                <br />
                                <strong>
                                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Prog (n-2, S,
                                  T)
                                </strong>
                                <br />
                                <strong> ENDIF</strong>
                              </p>
                              <p class="QuestionStyle">
                                <span style="line-height: 1.5">
                                  As before, get into the habit of drawing a box
                                  around each call and identify the value of
                                  each of the variables within each box! It is
                                  also a good idea to show an output screen, so
                                  that you can display everything in the right
                                  order.
                                </span>
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

export default Recursion;
