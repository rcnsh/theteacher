import React from "react";

function Understanding_and_using_selection() {
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
                                Understanding and using selection
                              </h1>
                              <p>
                                <strong>Introduction</strong>
                                <br />A selection construct tests data in a
                                variable for TRUE of FALSE (using an IF
                                statement) or looks at the data held in a
                                variable (using a CASE statement). Depending on
                                whether the test is true or false or what the
                                variable holds, different code will be executed.
                                In this way, we can alter the program flow and
                                execution. Some blocks of code may never get
                                executed at all whilst others will get executed.
                              </p>

                              <p>
                                There are two methods of selecting which code
                                from a choice of code will be executed, IF and
                                CASE. We will look at the IF construction first
                                followed by the CASE construction.
                              </p>
                              <p style="text-align: center">
                                <img
                                  src="images/8e24cb2c-7a70-4758-bcd0-26c3eb34b092Selection.GIF"
                                  alt="Selection"
                                />
                              </p>
                              <p>
                                <strong>
                                  Selection using the IF statement
                                </strong>
                                <br />
                                Look at the following example:
                              </p>
                              <p style="margin-left: 30px">
                                <strong>INPUT letter using keyboard</strong>
                                <br />
                                <strong>IF (Letter entered = "P") THEN</strong>
                                <br />
                                <strong>
                                  &nbsp; &nbsp; &nbsp;Do the code in here - call
                                  it block A
                                </strong>
                                <br />
                                <strong> ELSE</strong>
                                <br />
                                <strong>
                                  &nbsp; &nbsp; &nbsp;Do the code in here - call
                                  it block B
                                </strong>
                                <br />
                                <strong> ENDIF</strong>
                              </p>
                              <p>
                                When this code is run, the program waits for the
                                user to enter a letter via the keyboard. When
                                the letter has been entered, it is checked. If
                                the letter P were entered then the instructions
                                in block A would be executed. If the letter
                                entered was not a P, then the instructions in
                                block B would be done. The construction then
                                ends and the next instruction in the sequence is
                                done.
                              </p>
                              <p>
                                The IF statement used above has four key parts
                                to it: IF - THEN - ELSE - ENDIF. There are other
                                variations of the IF statement you can use. For
                                example, you might use IF - THEN - ENDIF
                                (without the ELSE).
                              </p>
                              <p>
                                <strong>Nested IF statements</strong>
                                <br />
                                You can put one IF statement inside another.
                                Consider the following code:
                              </p>
                              <p style="margin-left: 30px">
                                <strong>INPUT letter using keyboard</strong>
                                <br />
                                <strong>IF (Letter entered = "P") THEN</strong>
                                <br />
                                <strong>
                                  &nbsp; &nbsp; &nbsp;Do the code in here - call
                                  it block A
                                </strong>
                                <br />
                                <strong> ELSE</strong>
                                <br />
                                <strong>
                                  &nbsp; &nbsp; &nbsp;IF (Letter entered = "Q")
                                  THEN
                                </strong>
                                <br />
                                <strong>
                                  &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; Do the code
                                  in here - call it block B
                                </strong>
                                <br />
                                <strong>&nbsp; &nbsp; &nbsp;ELSE</strong>
                                <br />
                                <strong>
                                  &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; Do the code
                                  in here - call it block C
                                </strong>
                                <br />
                                <strong>&nbsp; &nbsp; &nbsp;ENDIF</strong>
                                <br />
                                <strong> ENDIF</strong>
                              </p>
                              <p>
                                If you enter P then you would do the block A
                                code. If it wasn't P then you would check to see
                                if Q was entered. If it was a Q, you would do
                                the block B code. If it wasn't a Q either, you
                                would then do the block C code.
                              </p>
                              <p>
                                <strong>Making the code easier to read</strong>
                                <br />
                                Note that the keywords in IF - ELSE - ENDIF for
                                each IF statement line up. We have used keyboard
                                tabs and spacing to do this. ‘Indentation’ makes
                                code easier to read.
                              </p>
                              <p>
                                <strong>CASE</strong>
                                <br />
                                You may realise that whilst nested IF statements
                                can be really useful, use too many and the code
                                becomes hard to follow! In the above example, we
                                only have two IF statements but imagine if there
                                were 10 nested IF statements. Fortunately, there
                                is another type of selection construct that can
                                be used that can make code easier to write, read
                                and understand. It usually involves checking
                                instances of variables.
                              </p>
                              <p>
                                We can summarise using a CASE statement like
                                this:
                              </p>
                              <p style="margin-left: 30px">
                                <strong>CASE (Selection) OF</strong>
                              </p>
                              <p style="margin-left: 30px">
                                <strong>
                                  &nbsp; &nbsp; &nbsp;a: Do these instructions
                                  if case a;
                                </strong>
                                <br />
                                <strong>
                                  &nbsp; &nbsp; &nbsp;b: Do these instructions
                                  if case b;
                                </strong>
                                <br />
                                <strong>
                                  &nbsp; &nbsp; &nbsp;c: Do these instructions
                                  if case c;
                                </strong>
                                <br />
                                <strong>
                                  &nbsp; &nbsp; &nbsp;d: Do these instructions
                                  if case d;
                                </strong>
                              </p>
                              <p style="margin-left: 30px">
                                <strong>ELSE</strong>
                              </p>
                              <p style="margin-left: 30px">
                                <strong>
                                  &nbsp; &nbsp; &nbsp;Do these instructions if
                                  none of the above cases apply;
                                </strong>
                              </p>
                              <p style="margin-left: 30px">
                                <strong>END CASE</strong>
                              </p>
                              <p>
                                You check a variable to see what has been
                                selected. You do different blocks of code,
                                depending on what the variable is. Note that the
                                ELSE part is usally optional in programming
                                languages.
                              </p>
                              <p>
                                <strong>An example of using CASE</strong>
                                <br />
                                Consider this example of using a CASE statement
                                for a weekly wage calculator;
                              </p>
                              <p style="margin-left: 30px">
                                I<strong>NPUT hours_worked</strong>
                                <br />
                                <strong>INPUT rate_of_pay</strong>
                              </p>
                              <p style="margin-left: 30px">
                                <strong>CASE hours_worked OF</strong>
                              </p>
                              <p style="margin-left: 30px">
                                <strong>
                                  &nbsp; &nbsp; &nbsp;hours_worked &lt;= 40 :
                                  gross_pay = pay_rate * hours_worked
                                </strong>
                                <br />
                                <strong>
                                  &nbsp; &nbsp; &nbsp;hours_worked &gt; 40 :
                                  gross_pay =(pay_rate * 40) + (2 x pay_rate *
                                  (hours_worked - 40))
                                </strong>
                              </p>
                              <p style="margin-left: 30px">
                                <strong>ENDCASE</strong>
                              </p>
                              <p style="margin-left: 30px">
                                <strong>OUTPUT gross_pay</strong>
                                <br />
                                <strong>END</strong>
                              </p>
                              <p>
                                You have to input two numbers, the hours worked
                                in a week and the hourly rate of pay. If the
                                hours worked in a week are 40 or less then you
                                do the line: CASE &lt;= 40 : gross_pay =
                                pay_rate * hours_worked. If the hours worked in
                                a week more than 40 then you do the line:
                                <br />
                                CASE &gt; 40 : gross_pay =(pay_rate * 40) + (2 x
                                pay_rate * (hours_worked - 40)). This works out
                                the pay for the week, including any overtime,
                                which is paid for hours over and above 40 hours
                                in a week and paid at double time. Finally, the
                                gross pay is output.<strong>&nbsp;</strong>
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

export default Understanding_and_using_selection;
