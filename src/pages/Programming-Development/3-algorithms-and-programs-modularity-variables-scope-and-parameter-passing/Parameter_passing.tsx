import React from "react";

function Parameter_passing() {
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
                                Parameter passing
                              </h1>
                              <p class="NormalContent">
                                <strong>
                                  <span class="NormalContentHeading">
                                    Introduction
                                    <br />
                                  </span>
                                </strong>
                                <span style="line-height: 1.5">
                                  Programmers like to write code in functions
                                  and procedures. They like to do this for all
                                  kinds of reasons. for example, they can put
                                  them into libraries and re-use them in other
                                  programs and save time, and they are easier to
                                  write, de-bug, understand and maintain because
                                  they tend to do just one job so aren't
                                  complicated. If you are going to write code
                                  using self-contained functions and procedures,
                                  then you need to be able to pass data to them
                                  each time you want to run them.
                                </span>
                              </p>

                              <p class="NormalContent">
                                <span style="line-height: 1.5">
                                  <span style="line-height: 16.3636360168457px">
                                    From now on, when we talk about a function,
                                    we will assume we are also talking about a
                                    procedure.
                                  </span>
                                </span>
                              </p>
                              <p class="NormalContent">
                                <span style="line-height: 1.5"></span>
                                <strong>Parameters</strong>
                                <br />A piece of data that you pass to a
                                function (or procedure) is called a{" "}
                                <strong>
                                  <em>parameter</em>
                                </strong>
                                . A function expects you to give it the exact
                                number of data items it needs, and these are
                                defined in a function's definition. You can pass
                                as many parameters as you like to a function but
                                they must match what the function said it needs.
                                Let's look at an example. Type the following
                                code in and get it working.
                              </p>
                              <p style="margin-left: 30px">
                                <strong>
                                  #Calculate the area of a triangle from the
                                  base and height
                                </strong>
                              </p>
                              <p style="margin-left: 30px">
                                <strong>
                                  def area_bh(base, height): # This function has
                                  two parameters.
                                </strong>
                                <br />
                                <strong>
                                  &nbsp; &nbsp; '''Calculates the area of a
                                  triange from the base and
                                  height.&nbsp;Requires two float arguments to
                                  work and returns a single float.'''
                                </strong>
                                <br />
                                <strong>
                                  &nbsp; &nbsp; area = 0.5 * base * height
                                </strong>
                                <br />
                                <strong>
                                  &nbsp; &nbsp; return area #This is the answer
                                  'returned' from the function
                                </strong>
                              </p>
                              <p style="margin-left: 30px">
                                <strong>
                                  myBase = float(input('Please enter the base
                                  &gt;&gt;&gt; ')) #get the base
                                </strong>
                                <br />
                                <strong>
                                  myHeight = float(input('Please enter the
                                  height &gt;&gt;&gt; ')) #get the height
                                </strong>
                                <br />
                                <strong>
                                  triangle = area_bh(myBase, myHeight) #call the
                                  function area_bh and pass it two arguments.
                                </strong>
                                <br />
                                <strong>
                                  print('The area of a triangle with
                                  base',myBase,'and
                                  height',myHeight,'is',triangle,'units
                                  squared.')
                                </strong>
                                &nbsp;
                              </p>
                              <p>
                                The above code uses a function to calculate the
                                area of a triangle. In the definition of the
                                function, we used the line:
                              </p>
                              <p style="margin-left: 30px">
                                <strong style="line-height: 16.3636360168457px">
                                  def area_bh(base, height):&nbsp;
                                </strong>
                              </p>
                              <p>
                                This says that you must pass this function two
                                parameters for it to work. The first parameter
                                you pass will be assigned to base and the second
                                one will be assigned to height. If you don't
                                give the function exactly two parameters, you
                                will get an error. Try adding an extra line to
                                the end of the program:
                              </p>
                              <p>
                                <strong style="line-height: 16.3636360168457px">
                                  &nbsp; &nbsp; &nbsp; &nbsp; print
                                  (area_bh(20))
                                </strong>
                              </p>
                              <p>Now try:</p>
                              <p>
                                <strong style="line-height: 16.3636360168457px">
                                  &nbsp; &nbsp; &nbsp; &nbsp;print (area_bh(12,
                                  45, 23))
                                </strong>
                              </p>
                              <p>What error messages did you get?</p>
                              <p>
                                <strong>
                                  Passing parameters by reference to it (REF))
                                </strong>
                                <br />
                                Some programming languages allow you to pass
                                parameters by reference to the original one. If
                                you pass a parameter from your main program to a
                                function by reference, that means that you are
                                actually passing a pointer to the function that
                                points to the original parameter, the original
                                piece of data. If you make any changes to the
                                parameter inside the function, then the original
                                parameter will be changed as well.&nbsp;Consider
                                the following pseudo-code example:
                              </p>
                              <p style="margin-left: 30px">
                                <strong>myData = 20</strong>
                              </p>
                              <p style="margin-left: 30px">
                                <strong>
                                  function addNumber (byRef num as integer)
                                </strong>
                                <br />
                                <strong>&nbsp; &nbsp; print (num + 1)</strong>
                              </p>
                              <p style="margin-left: 30px">
                                <strong>print (myData)</strong>
                                <br />
                                <strong>addNumber(myData)</strong>
                                <br />
                                <strong>print (myData)</strong>
                              </p>
                              <p>
                                Firstly, we print myData, which prints 20. Then
                                we call the function and we pass it 20 by
                                reference. Inside the function, we add 1 to it
                                and print 21. After we exit the function, we
                                print myData again and we see that it also
                                prints 21. That's because when we passed myData
                                to the function, we passed it by reference. The
                                a pointer to the data was given to num and any
                                changes that happended to num were also made to
                                myData.&nbsp;
                              </p>
                              <p>
                                <span style="line-height: 16.3636360168457px">
                                  <strong>
                                    Passing parameters by value (VAL)
                                  </strong>
                                  <br />
                                  Some programming languages allow you to pass
                                  parameters by value. If you pass a parameter
                                  from your main program to a function by value,
                                  that means that you are actually taking a copy
                                  of the parameter first, and then passing that
                                  copy to the function. If you make any changes
                                  to the copy of the parameter inside the
                                  function, it doesn't change the data held in
                                  the original parameter. consider the example
                                  we just looked at, but this time, we will pass
                                  the data by value.
                                </span>
                              </p>
                              <p
                                style="
                              margin-top: 10px;
                              margin-left: 30px;
                              line-height: 16.3636360168457px;
                            "
                              >
                                <strong>myData = 20</strong>
                              </p>
                              <p
                                style="
                              margin-left: 30px;
                              line-height: 16.3636360168457px;
                            "
                              >
                                <strong>
                                  function addNumber (byVal num as integer)
                                </strong>
                                <br />
                                <strong>&nbsp; &nbsp; print (num + 1)</strong>
                              </p>
                              <p
                                style="
                              margin-bottom: 10px;
                              margin-left: 30px;
                              line-height: 16.3636360168457px;
                            "
                              >
                                <strong>print (myData)</strong>
                                <br />
                                <strong>addNumber(myData)</strong>
                                <br />
                                <strong>print (myData)</strong>
                              </p>
                              <p>
                                <span style="line-height: 16.3636360168457px">
                                  Firstly, we print myData, which prints 20.
                                  Then we call the function and we pass it 20 by
                                  value. Inside the function, we add 1 to it and
                                  print 21. After we exit the function, we print
                                  myData again and we see that it prints 20
                                  again. That's because when we passed myData to
                                  the function, we passed it by value. We passed
                                  a copy of the data in myData to num so any
                                  changes that happended to num were now not
                                  made to myData.
                                </span>
                                &nbsp;
                              </p>
                              <p>Look at this example:</p>
                              <p style="margin-left: 30px">
                                <strong>data1 = 5</strong>
                                <br />
                                <strong>data2 = 20</strong>
                                <br />
                                <strong>data3 = 30</strong>
                              </p>
                              <p style="margin-left: 30px">
                                <strong>
                                  function mult(byXXX num1 as integer, byXXX
                                  num2 as integer, byXXX num3 as integer)
                                </strong>
                                <br />
                                <strong>
                                  &nbsp; &nbsp; num1 = num1 * num2 * num3
                                  <br />
                                  &nbsp; &nbsp; print (num1)
                                </strong>
                              </p>
                              <p style="margin-left: 30px">
                                <strong>
                                  print (data1, data2, data3)
                                  <br />
                                  mult(data1, data2, data3)
                                  <br />
                                  <strong style="line-height: 16.3636360168457px">
                                    print (data1, data2, data3)
                                  </strong>
                                  <br />
                                </strong>
                              </p>
                              <p>a) What is the output when XXX is Ref?</p>
                              <p>b) What is the output when XXX is Val?</p>
                              <p>
                                In the first example, we passed 5, 10 and 30 by
                                reference. That means we are passing pointers to
                                the original data items. Any changes we make to
                                these parameters inside the function are also
                                made to the original data items. Inside the
                                function, we assigned num1 to 3000 (5 * 20 *
                                30). That means that data1 also got changed to
                                3000. The output is therefore 5, 20, 30 , 3000,
                                3000, 20, 30
                              </p>
                              <p>
                                In the second example example, we passed 5, 20
                                and 30 to the function by value. That means that
                                any changes made inside the function do not
                                change the original data items. Although num1
                                was changed inside the function, it did not
                                change the original data items. The output was
                                therefore 5, 20 and 30, 3000, 5, 20, 30.
                              </p>
                              <p>
                                <strong>
                                  Passing data by reference and value in Python
                                  and other programming languages
                                </strong>
                                <br />
                                In some programming languages like BASIC, Pascal
                                and C++, there are specific instructions that
                                allow you to pass values to functions either by
                                reference or by value. In other languages, it
                                doesn't really apply. In Python, for example,
                                the distinction between reference and value
                                parameter passing doesn't apply. In Python,
                                variables are just names for values and if you
                                want to give a value two names, you can do that
                                in Python. When you call a function in Python,
                                another name for the same value is passed to the
                                function. It's not the same as pass by value
                                because a copy isn't made of the original data.
                                Neither is it using 'pass by reference' because
                                a pointer to the original data isn't being
                                passed to the function.
                              </p>
                              <p>
                                For example, consider this Python code. Type it
                                in and get it working, but before you do, can
                                you predict the output?
                              </p>
                              <p style="margin-left: 30px">
                                <strong>def spam(eggs):</strong>
                                <br />
                                <strong>&nbsp; &nbsp; eggs.append(1)</strong>
                                <br />
                                <strong>&nbsp; &nbsp; eggs = [2, 3]</strong>
                              </p>
                              <p style="margin-left: 30px">
                                <strong>ham = [0]</strong>
                                <br />
                                <strong>spam(ham)</strong>
                                <br />
                                <strong>print(ham)</strong>
                              </p>
                              <p>
                                If Python used pass by value, eggs would have
                                been passed a copy of ham, which is [0]. What
                                ever happened to eggs, wouldn't change ham, so
                                when you printed ham out, it should print [0].
                              </p>
                              <p>
                                If Python passed parameters by reference, it
                                would have been passed a pointer to ham. Any
                                changes to eggs would then also change ham. It
                                should have printed out [2, 3].
                              </p>
                              <p>
                                In fact, eggs simply became a second name
                                pointing at the same data ham is pointing to,
                                like this:
                              </p>
                              <p>
                                <img
                                  style="margin: 10px; vertical-align: middle"
                                  src="images/c86e9bd5-2d5f-47fe-8b3f-354863313389spam1.GIF"
                                  alt="spam1"
                                />
                              </p>
                              <p>
                                When the value is mutated, that value is seen by
                                ham. However, when the program doesn't mutate
                                but rebinds eggs to a different value, ham is
                                still pointing to the original data.
                              </p>
                              <p>
                                <img
                                  style="margin: 10px; vertical-align: middle"
                                  src="images/100c64fa-57db-4061-af72-6f612c528231spam2.GIF"
                                  alt="spam2"
                                />
                              </p>
                              <p>&nbsp;</p>
                              <p>
                                What gets printed out is [0, 1].&nbsp;This is
                                quite a difficult idea to get your head around
                                to start with, but a visualiser can help here.
                                Copy or type the code into
                                <a
                                  href="http://www.pythontutor.com"
                                  target="_blank"
                                >
                                  www.pythontutor.com
                                </a>
                                &nbsp;and run it. You will be able to see
                                exactly how the Python program (and any other
                                program you are working with) is
                                working.&nbsp;There are similar issues with
                                other languages. Java essential passes
                                parameters by value using native and class types
                                whereas Ruby will call what Java does 'call by
                                reference'! This can all get very confusing and
                                is beyond the scope of A Level Computer Science.
                                If you stick to the classic definitions of
                                passing by reference or value, and then take
                                note of how the languages you are learning
                                works, you won't go far wrong!
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

export default Parameter_passing;
