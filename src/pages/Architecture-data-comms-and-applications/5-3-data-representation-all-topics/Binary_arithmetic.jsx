import React from "react";

function Binary_arithmetic() {
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
                                Binary arithmetic
                              </h1>
                              <p>
                                <strong class="NormalContentHeading">
                                  Binary addition
                                </strong>
                                <br />
                                We've now seen how to represent both positive
                                and negative numbers in binary. Before we look
                                at adding some numbers, let's look the rules of
                                binary addition.
                              </p>

                              <ul>
                                <li style="list-style-type: none">
                                  <ul style="list-style-type: disc">
                                    <li>
                                      Zero plus zero = zero! In binary, 0 + 0 =
                                      0 (0 is the binary equivalent of zero)!
                                    </li>
                                    <li>
                                      One plus zero (or zero plus one) = one! In
                                      binary, 1 + 0 = 1 (1 is the binary
                                      equivalent of one)!
                                    </li>
                                    <li>
                                      One plus one = two! In binary, 1 + 1 = 10
                                      (10 is the binary equivalent of two).
                                    </li>
                                    <li>
                                      One plus one plus one = 11 (11 is the
                                      binary equivalent of three).
                                    </li>
                                    <li>
                                      One plus one plus one plus one = 100 (100
                                      is the binary equivalent of four).
                                    </li>
                                    <li>And so on.</li>
                                  </ul>
                                </li>
                              </ul>
                              <p>
                                Let’s look at some straightforward examples
                                before we look at some more complicated ones
                                later in the chapter.
                              </p>
                              <p>
                                <strong class="NormalContentHeading">
                                  Example 1
                                </strong>
                                <br />
                                Add 25 to 20 in pure binary, using a byte for
                                each number.
                              </p>
                              <p>
                                <img
                                  src="images/695efa56-96b5-4289-ad37-4cec0bdfb79ba.gif"
                                  alt
                                />
                              </p>
                              <p>
                                <strong class="NormalContentHeading">
                                  Example 2
                                </strong>
                                <br />
                                Add 15 to 15 in pure binary, using a byte for
                                each number.
                              </p>
                              <p>The binary equivalent of 15 is 0000 1111</p>
                              <p>So we need to do the sum:</p>
                              <p>
                                <img
                                  src="images/5a1fdbe4-f5d7-4815-9cc2-2c3dc1c22982b.gif"
                                  alt
                                />
                              </p>
                              <p>
                                <strong class="NormalContentHeading">
                                  Example 3
                                </strong>
                                <br />
                                Add 150 to 140 in pure binary, using a byte for
                                each number.
                              </p>
                              <p>
                                The binary equivalent of 150 is 1001 0110 <br />
                                The binary equivalent of 140 is 1000 1100
                              </p>
                              <p>So we need to do the sum:</p>
                              <p>
                                <img
                                  src="images/c29ffa52-f5e6-4238-b180-74a7bad864c3c.gif"
                                  alt
                                />
                              </p>
                              <p>
                                Something strange has happened! We have
                                generated a<strong>carry</strong>. Our answer
                                needs to be in a byte, but we can’t hold the
                                answer in a byte. We can if we have 9 bits, but
                                a byte only has 8.
                              </p>
                              <p>
                                If ever you add some
                                <strong>pure binary positive</strong> numbers
                                together and you generate a{" "}
                                <strong>carry</strong>, then you must{" "}
                                <strong>disregard</strong> the answer. In this
                                example, 1001 0110 + 10001100 gave us the answer
                                0010 0010 with a <strong>carry</strong>. Because
                                a carry was generated when we did the addition,
                                we know that the answer can’t be stored in a
                                byte, is meaningless and should therefore be
                                disregarded.
                              </p>
                              <p>
                                If this ever happens in a program, an error
                                message would be displayed. The error message is
                                known as an
                                <strong>overflow error</strong>. It means that
                                an answer was generated but it was too big to
                                store in the data structure set up for the
                                answer. Our carry bit in this instance could
                                also be referred to as an
                                <strong>overflow bit</strong>. It’s also
                                possible to have an{" "}
                                <strong>underflow error</strong>. This is
                                generated when the answer is <em>too small</em>{" "}
                                to be represented in the data structure set up
                                for it.
                              </p>
                              <p>
                                <strong class="NormalContentHeading">
                                  Binary subtraction
                                </strong>
                                <br />
                                Subtraction is the same as adding a negative
                                number! For example,
                              </p>
                              <ul>
                                <li style="list-style-type: none">
                                  <ul style="list-style-type: disc">
                                    <li>10 - 5 is the same as 10 + (-5).</li>
                                    <li>
                                      123 - 100 is the same as 123 + (-100).
                                    </li>
                                    <li>-23 -34 is the same as -23 + (-34).</li>
                                  </ul>
                                </li>
                              </ul>
                              <p>
                                We can use this property if we need to subtract
                                numbers in binary because we know how to convert
                                a negative number into its two’s complement. If
                                we have to do the sum 23 - 5 (in binary, of
                                course) then we will
                              </p>
                              <ul>
                                <li style="list-style-type: none">
                                  <ul style="list-style-type: disc">
                                    <li>
                                      Rearrange it so that it reads 23 + (-5).
                                    </li>
                                    <li>
                                      Work out what 23 is as a two’s complement
                                      number.
                                    </li>
                                    <li>
                                      Work out what -5 is as a two’s complement
                                      number.
                                    </li>
                                    <li>Add 23 to -5.</li>
                                  </ul>
                                </li>
                              </ul>
                              <p>
                                So, any time we have to do a subtraction, we
                                will rearrange the numbers so that it is an
                                addition! Let’s look at some examples. It is
                                worth noting before we begin that all numbers in
                                the next examples, both positive and negative,
                                will be in two’s complement form. This is
                                actually quite
                                <strong>important</strong> to note because it
                                has an impact on the way we interpret any carry
                                generated.
                              </p>
                              <p>
                                <strong class="NormalContentHeading">
                                  Example 1
                                </strong>
                                <br />
                                Let's do the sum 28 - 16 = ? The first thing
                                that we need to do is to rearrange it slightly.
                              </p>
                              <p>28 - 16 = ? is equivalent to 28 + (-16) = ?</p>
                              <p>
                                We have rearranged this sum for a very good
                                reason.&nbsp; It involved a negative number. By
                                putting the sum in the form 28 + (-16) we
                                represent easily both 28 and also (-16), using
                                the two’s complement numbering system. Once we
                                have got both numbers into the two’s complement
                                numbering system, we can then add them both
                                together. Notice that we have converted (-16)
                                into a two’s complement number using the three
                                steps we met in the previous chapter. We
                              </p>
                              <ol>
                                <li style="list-style-type: none">
                                  <ol>
                                    <li>
                                      Write down the positive version of the
                                      number.
                                    </li>
                                    <li>
                                      We copy all the bits from bit zero up to
                                      and including the first one bit.
                                    </li>
                                    <li>
                                      We then invert all the remaining bits.
                                    </li>
                                  </ol>
                                </li>
                              </ol>
                              <p>
                                The steps to doing this calculation are shown
                                below.
                              </p>
                              <p>
                                <img
                                  src="images/4a0709e3-a476-4f2f-879a-393afcd88fb5d.gif"
                                  alt
                                />
                              </p>
                              <p>
                                Just to double-check, 0000 1100 is 8 + 4 = 12 in
                                the denary system.
                              </p>
                              <p>
                                Note the ‘carry’ bit here. We are working with
                                single bytes. Our answer is in a single byte.
                                Unfortunately, when we did our sum, the one byte
                                wasn't big enough to hold the answer. We had to
                                use an extra bit, called a 'carry'.
                              </p>
                              <p>
                                <strong>
                                  The rules when a carry occurs with two’s
                                  complement arithmetic.
                                </strong>
                                <br />
                                Sometimes, the carry tells us something.
                                Sometimes we ignore it! How do you decide?
                              </p>
                              <ol>
                                <li style="list-style-type: none">
                                  <ol>
                                    <li>
                                      When you add a positive number to a
                                      negative number, the rule is to "ignore
                                      any carry produced and accept the result
                                      as true". You saw that in the above
                                      example.
                                    </li>
                                    <li>
                                      If you add 2 negative numbers together,
                                      you will always get a carry. If bit 7 is a
                                      zero, then ignore the result. If bit 7 is
                                      a one, then accept the result.
                                    </li>
                                    <li>
                                      If you add two positive numbers together
                                      (in two’s complement form), you'll never
                                      get a carry. To check if the result is
                                      valid or not, you need to look at bit 7.
                                      Remember, in two's complement, all
                                      positive numbers begin with zero. If you
                                      add two positive numbers together, the
                                      result must be positive. You can check if
                                      an answer is out of the range that can be
                                      held by the byte by looking at bit 7. If
                                      it is a zero, accept it. If it is a one,
                                      reject the result.
                                    </li>
                                  </ol>
                                </li>
                              </ol>
                              <p>
                                <strong class="NormalContentHeading">
                                  Example 2
                                </strong>
                                <br />
                                Let's do another sum. Lets do -80 - 40 = ? This
                                is the same as -80 + (-40) = ?
                              </p>
                              <p>
                                <img
                                  src="images/4894f912-2e0a-42ea-97c8-a2202f1b0bb4e.gif"
                                  alt
                                />
                              </p>
                              <p>
                                We are adding two negative numbers together. We
                                will always get a carry. Our rule says if you
                                add two negative numbers together then check bit
                                7. If it's a one (as it is here), the result is
                                good. Just to double-check the binary,
                                <br />
                                we have -128 + 8 = -120, so our answer is
                                correct.
                              </p>
                              <p>
                                <strong class="NormalContentHeading">
                                  Example 3
                                </strong>
                                <br />
                                Let's do another sum. Lets do -80 - 90 = ? This
                                is the same as -80 + (-90) = ?
                              </p>
                              <p>
                                <img
                                  src="images/1d943d0b-4231-4499-aa40-cbd676a8df26f.gif"
                                  alt
                                />
                              </p>
                              <p>
                                We are adding two negative numbers together. Our
                                rule says if you add two negative numbers
                                together then check bit 7 - if it's a zero,
                                reject the result. Bit 7 is a zero so the result
                                is meaningless.
                              </p>
                              <p>
                                <strong class="NormalContentHeading">
                                  Example 4
                                </strong>
                                <br />
                                Lets do 96 + 50 = ?
                              </p>
                              <p>
                                <img
                                  src="images/d4f4ed4a-25a1-4e85-a261-e39acdc2c06fg.gif"
                                  alt
                                />
                              </p>
                              <p>
                                We are adding two positive numbers together, so
                                the result must be positive. We aren't checking
                                the carry bit when we add two positive numbers,
                                we're checking bit 7. In this case, bit 7 is a
                                one, so we reject the result.
                              </p>
                              <p class="NormalContentHeading">
                                <strong>Summary</strong>
                              </p>
                              <ul>
                                <li style="list-style-type: none">
                                  <ul style="list-style-type: disc">
                                    <li>
                                      When doing binary arithmetic, all numbers
                                      are put in two’s complement form unless
                                      you are told otherwise.
                                    </li>
                                    <li>
                                      You cannot simply accept a result. You
                                      must sometimes look at the carry and
                                      sometimes look at bit 7 to make a decision
                                      as to the validity of the result.
                                    </li>
                                    <li>
                                      If a number cannot be held in the data
                                      structure provided for it, then we say
                                      there is an ‘overflow’.
                                    </li>
                                  </ul>
                                </li>
                              </ul>
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

export default Binary_arithmetic;
