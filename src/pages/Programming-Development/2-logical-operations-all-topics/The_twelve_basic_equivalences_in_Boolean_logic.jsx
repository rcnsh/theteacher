import React from "react";

function The_twelve_basic_equivalences_in_Boolean_logic() {
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
                                The twelve basic equivalences in Boolean logic
                              </h1>
                              <p class="NormalContent">
                                <strong>
                                  <strong>
                                    Introduction
                                    <br />
                                  </strong>
                                </strong>
                                We need to become proficient in manipulating
                                Boolean expressions. There are quite a few rules
                                and techniques that can helps us do this. We
                                will begin at the beginning and look at the
                                first twelve identities that are going to help
                                us. We you look at each example, remember that
                                any of the variables A, B or C can be a single
                                variable or a combination of variables. We will
                                see examples of this later on.
                              </p>

                              <p class="NormalContent">
                                <strong>AND&nbsp;Λ</strong>
                                <br />
                                When we have a Boolean expression involving AND,
                                there are some things to look out for. These are
                                as follows:
                              </p>
                              <p
                                class="NormalContent"
                                style="margin-left: 30px"
                              >
                                A &nbsp;Λ 0 &nbsp;(This means A AND 0)
                              </p>
                              <p
                                class="NormalContent"
                                style="margin-left: 30px"
                              >
                                A &nbsp;Λ 1&nbsp;(This means A AND 1)
                              </p>
                              <p
                                class="NormalContent"
                                style="margin-left: 30px"
                              >
                                A &nbsp;Λ A&nbsp;(This means A AND A)
                              </p>
                              <p
                                class="NormalContent"
                                style="margin-left: 30px"
                              >
                                A &nbsp;Λ ¬A&nbsp;(This means A AND (NOT A))
                              </p>
                              <p class="NormalContent">
                                Unfortunately, the exam board OCR have said that
                                they will set questions using this notation so
                                we need to get used to it. Let's look at each of
                                these in turn.
                              </p>
                              <p class="NormalContent">
                                <img
                                  style="margin: 10px; float: left"
                                  src="images/d05a357e-8d1c-483b-a889-77710f2e1c09aand0.GIF"
                                  alt="aand0"
                                />
                              </p>
                              <p class="NormalContent">
                                A Λ&nbsp;0 &nbsp;can be represented using this
                                logic diagram. If one of the inputs is fixed to
                                be a 0, then it really doesn't matter what the
                                other input is; the output Q can never become a
                                1 as our AND truth table says that both inputs
                                into an AND gate must be a 1 for the output to
                                be a 1, else the output is a 0. So we can say
                                that A AND 0 is equivalent to 0 and we can write
                                that in notation like this:
                              </p>
                              <p
                                class="NormalContent"
                                style="margin-left: 30px"
                              >
                                <strong>A&nbsp;Λ 0&nbsp;</strong>≡
                                <strong>0</strong>
                              </p>
                              <p
                                class="NormalContent"
                                style="margin-left: 30px"
                              >
                                &nbsp;
                              </p>
                              <p
                                class="NormalContent"
                                style="margin-left: 30px"
                              >
                                <span style="line-height: 1.5">&nbsp;</span>
                              </p>
                              <p class="NormalContent" style="margin-top: 10px">
                                <img
                                  style="margin: 10px; float: left"
                                  src="images/c7233522-8010-48e9-9815-bac7ab59f52baand1.GIF"
                                  alt="aand1"
                                />
                                A Λ&nbsp;1 &nbsp;can be represented using this
                                logic diagram. If one of the inputs is fixed to
                                be a 1, then if A is a 1, both inputs are 1 and
                                the output is a 1. If A is 0, then the output is
                                0. The output is in fact whatever A is. So we
                                can say that A AND 1 is equivalent to A and we
                                can write that in notation like this:
                              </p>
                              <p
                                class="NormalContent"
                                style="margin-bottom: 10px; margin-left: 30px"
                              >
                                <strong>A&nbsp;Λ 1&nbsp;</strong>≡
                                <strong>A</strong>
                              </p>
                              <p
                                class="NormalContent"
                                style="margin-bottom: 10px; margin-left: 30px"
                              >
                                &nbsp;
                              </p>
                              <p
                                class="NormalContent"
                                style="margin-bottom: 10px; margin-left: 30px"
                              >
                                &nbsp;
                              </p>
                              <p class="NormalContent">
                                &nbsp;
                                <img
                                  style="margin: 10px; float: left"
                                  src="images/a2230cd5-3ef2-4a0f-b130-98a07f627937aanda1.GIF"
                                  alt="aanda1"
                                />
                                A Λ&nbsp;A &nbsp;can be represented using this
                                logic diagram. If both inputs are A, then if A
                                is a 1, both inputs are 1 and the output is a 1.
                                If A is 0, then the output is 0. The output is
                                in fact whatever A is. So we can say that A AND
                                A is equivalent to A and we can write that in
                                notation like this:
                              </p>
                              <p
                                class="NormalContent"
                                style="margin-bottom: 10px; margin-left: 30px"
                              >
                                <strong>A&nbsp;Λ A&nbsp;</strong>≡
                                <strong>A</strong>
                              </p>
                              <p class="NormalContent">&nbsp;</p>
                              <p class="NormalContent">&nbsp;</p>
                              <p class="NormalContent">
                                <img
                                  style="margin: 10px; float: left"
                                  src="images/bde3a3ca-7f71-4e98-bd37-c0047dafbdf2aandnot1.GIF"
                                  alt="aandnot1"
                                />
                                A Λ&nbsp;¬A &nbsp;can be represented using this
                                logic diagram. Note the bar over the A. This is
                                a common way of showing NOT. If one input is A
                                and the other input is the opposite of A, then
                                the output Q can never become a 1 as our AND
                                truth table says that both inputs into an AND
                                gate must be a 1 for the output to be a 1, else
                                the output is a 0, and that just can't
                                happen.&nbsp;The output is in fact 0. So we can
                                say that A AND (NOT A) is equivalent to 0 and we
                                can write that in notation like this:
                              </p>
                              <p
                                class="NormalContent"
                                style="margin-bottom: 10px; margin-left: 30px"
                              >
                                <strong>A&nbsp;Λ ¬A&nbsp;</strong>≡
                                <strong>0</strong>
                              </p>
                              <p
                                class="NormalContent"
                                style="margin-bottom: 10px; margin-left: 30px"
                              >
                                &nbsp;
                              </p>
                              <p class="NormalContent" style="margin-top: 10px">
                                <strong>OR V</strong>
                                <br />
                                When we have a Boolean expression involving OR,
                                like AND there are some things to look out for.
                                These are as follows:
                              </p>
                              <p
                                class="NormalContent"
                                style="margin-left: 30px"
                              >
                                A &nbsp;V 0 &nbsp;(This means A OR 0)
                              </p>
                              <p
                                class="NormalContent"
                                style="margin-left: 30px"
                              >
                                A &nbsp;V 1&nbsp;(This means A OR 1)
                              </p>
                              <p
                                class="NormalContent"
                                style="margin-left: 30px"
                              >
                                A &nbsp;V A&nbsp;(This means A OR A)
                              </p>
                              <p
                                class="NormalContent"
                                style="margin-left: 30px"
                              >
                                A &nbsp;V ¬A&nbsp;(This means A OR (NOT A))
                              </p>
                              <p class="NormalContent" style="margin-top: 10px">
                                <img
                                  style="margin: 10px; float: left"
                                  src="images/3b308d2d-a3d0-472f-a340-c3fe5bdd70f9or0.GIF"
                                  alt="or0"
                                />
                                A V&nbsp;0 &nbsp;can be represented using this
                                logic diagram. If one input is fixed at 0, then
                                if A is a 1, the output is a 1. If A is a 0, the
                                output is a 0. The output is in fact whatever A
                                is. We can say that A OR 0 is the equivalent of
                                A. We can write that in notation like this:
                              </p>
                              <p
                                class="NormalContent"
                                style="margin-bottom: 10px; margin-left: 30px"
                              >
                                <strong>A V 0&nbsp;</strong>≡<strong> A</strong>
                              </p>
                              <p class="NormalContent" style="margin-top: 10px">
                                &nbsp;
                              </p>
                              <p class="NormalContent" style="margin-top: 10px">
                                &nbsp;
                              </p>
                              <p class="NormalContent" style="margin-top: 10px">
                                <img
                                  style="margin: 10px; float: left"
                                  src="images/a6cef364-5e64-41bb-a947-d4d03d6bcfaaor1.GIF"
                                  alt="or1"
                                />
                                A V&nbsp;1 &nbsp;can be represented using this
                                logic diagram. If one input is fixed at 1, then
                                it doesn't matter what A is. The output will
                                always be 1. We can say that A OR 1 is the
                                equivalent of 1. We can write that in notation
                                like this:
                              </p>
                              <p
                                class="NormalContent"
                                style="margin-bottom: 10px; margin-left: 30px"
                              >
                                <strong>A V 1&nbsp;</strong>≡<strong> 1</strong>
                              </p>
                              <p
                                class="NormalContent"
                                style="margin-bottom: 10px; margin-left: 30px"
                              >
                                &nbsp;
                              </p>
                              <p class="NormalContent" style="margin-top: 10px">
                                &nbsp;
                              </p>
                              <p class="NormalContent" style="margin-top: 10px">
                                <img
                                  style="margin: 10px; float: left"
                                  src="images/fa2b40e0-6df4-4afa-a275-b78e66bd2611ora.GIF"
                                  alt="ora"
                                />
                                A V&nbsp;A &nbsp;can be represented using this
                                logic diagram. If both inputs are A, then the
                                output will be whatever A is. We can say that A
                                OR A is the equivalent of A. We can write that
                                in notation like this:
                              </p>
                              <p
                                class="NormalContent"
                                style="margin-bottom: 10px; margin-left: 30px"
                              >
                                <strong>A V A&nbsp;</strong>≡<strong> A</strong>
                              </p>
                              <p class="NormalContent" style="margin-top: 10px">
                                &nbsp;
                              </p>
                              <p class="NormalContent" style="margin-top: 10px">
                                &nbsp;
                              </p>
                              <p class="NormalContent" style="margin-top: 10px">
                                <img
                                  style="margin: 10px; float: left"
                                  src="images/e1fc8055-259e-4149-81a5-14eb7fb56f4bornota.GIF"
                                  alt="ornota"
                                />
                                A V ¬A&nbsp; can be represented using this logic
                                diagram. Note the bar over the A.&nbsp;This is a
                                common way of showing NOT.&nbsp;If one input is
                                fixed at NOT A, then if A is a 1, the output is
                                a 1. If A is a 0, the output is still 1. The
                                output is in fact always 1. We can say that A OR
                                (NOT A)&nbsp;is the equivalent of 1. We can
                                write that in notation like this:
                              </p>
                              <p
                                class="NormalContent"
                                style="margin-bottom: 10px; margin-left: 30px"
                              >
                                <strong>A V ¬A&nbsp;</strong>≡
                                <strong> 1</strong>
                              </p>
                              <p
                                class="NormalContent"
                                style="margin-bottom: 10px; margin-left: 30px"
                              >
                                &nbsp;
                              </p>
                              <p class="NormalContent" style="margin-top: 10px">
                                <strong style="line-height: 1.5">
                                  <br />
                                  Double negation
                                  <br />
                                </strong>
                                What hapens if you do NOT NOT A? The alternative
                                notation for this would
                                be&nbsp;¬&nbsp;¬A.&nbsp;If you consider the
                                logic circuit for a double negation, showing
                                what happens when you feed the circuit a 0 and
                                what happens when you feed the circuit a 1, you
                                would hopefully draw something like this:
                              </p>
                              <p class="NormalContent">
                                <img
                                  style="margin: 10px; vertical-align: middle"
                                  src="images/6e1e0b34-0f9b-42fd-b1b6-e7bdb6adc767doubneg.GIF"
                                  alt="doubneg"
                                />
                                <br />
                                You can see in the top circuit, if you feed in a
                                0, the first NOT gate makes it a 1 and the
                                second not gate makes it a 0.
                                <br />
                                You can see in the bottom circuit, if you feed
                                in a 1, the first NOT gate makes it a 0 and the
                                second not gate makes it a 1.
                              </p>
                              <p class="NormalContent">
                                If you have a double negation, it's like not
                                having the double negation at all. The output is
                                the same as whatever it was to start with. This
                                is another thing to look out for when working
                                with or simplifying expressions. We can
                                represent this using notation:
                              </p>
                              <p class="NormalContent">
                                <strong>¬&nbsp;¬A </strong>≡
                                <strong>
                                  &nbsp;A
                                  <br />
                                  <br />
                                </strong>
                              </p>
                              <p
                                class="NormalContent"
                                style="margin-bottom: 10px"
                              >
                                <strong>A OR (A AND B)&nbsp;</strong>≡
                                <strong>A</strong>
                                <br />
                                <img
                                  style="margin: 10px; float: left"
                                  src="images/d423d118-56b0-43b7-8be2-c27ebf0de3ebaoraandb.GIF"
                                  alt="aoraandb"
                                />
                                So far in this section, we have specified nine
                                of the twelve standard equivalences (you can
                                just call them rules if you want) that you need
                                to know to be able to start simplifying Boolean
                                equations. These twelve are the starting twelve.
                                There are others, which we will come to in later
                                sections. We have three more equivalences to
                                cover in this section. Let's look at&nbsp;
                                <strong>A OR (A AND B)&nbsp;</strong>≡
                                <strong> A</strong>&nbsp;which we can also write
                                in notation as
                                <strong>A V (A&nbsp;Λ B)&nbsp;</strong>≡
                                <strong> A. </strong>You can see the equivalent
                                logic gate diagram for this on the left.&nbsp;
                              </p>
                              <p
                                class="NormalContent"
                                style="margin-bottom: 10px"
                              >
                                If A is a 1, then because of the OR gate, the
                                output Q will be a 1. If A is a 0, then the AND
                                gate output can never be 1 and both inputs to
                                the OR gate will be 0. The output will therefore
                                be 0. In other words, Q is always the same as
                                whatever A is, or&nbsp;
                                <strong>A V (A&nbsp;Λ B)&nbsp;</strong>≡
                                <strong> A.</strong>
                              </p>
                              <p
                                class="NormalContent"
                                style="margin-bottom: 10px"
                              >
                                You can also prove this using Boolean
                                algebra.&nbsp;
                              </p>
                              <p
                                class="NormalContent"
                                style="margin-bottom: 10px"
                              >
                                A OR (A AND B), using the distributive law to
                                factorise this, we get
                                <br />≡ A AND (1 + B), using our law that A OR 1
                                = 1, we get
                                <br />≡ A AND 1, using our law that A AND 1 is
                                always A, we get
                                <br />≡ A
                                <strong>
                                  <br />
                                </strong>
                                <span style="line-height: 1.5">&nbsp;</span>
                              </p>
                              <p class="NormalContent" style="margin-top: 10px">
                                <strong>A OR ((NOT A) AND B)&nbsp;</strong>≡
                                <strong>
                                  A OR B<br />
                                </strong>
                                Let's look at&nbsp;
                                <strong>A OR ((NOT A) AND B)&nbsp;</strong>≡
                                <strong> A OR B</strong>&nbsp;which we can also
                                write in notation as
                                <strong>
                                  &nbsp;A V (¬A&nbsp;Λ&nbsp;B)&nbsp;
                                </strong>
                                ≡<strong> A V B.&nbsp;</strong>You can see the
                                equivalent logic gate diagram for this below.
                              </p>
                              <p class="NormalContent" style="margin-top: 10px">
                                <img
                                  style="margin: 10px; vertical-align: middle"
                                  src="images/1cd30dd1-b313-4d9d-91d7-f121d1d94162aornotaandb.GIF"
                                  alt="aornotaandb"
                                />
                              </p>
                              <p class="NormalContent" style="margin-top: 10px">
                                <img
                                  style="margin: 10px; vertical-align: middle"
                                  src="images/748ab7a7-e6fe-4c19-897c-3f615682b564aornotaandbtruth.GIF"
                                  alt="aornotaandbtruth"
                                />
                              </p>
                              <p>
                                Now this is a little more complicated so we are
                                going to prove this identity using a truth
                                table. The point C in the diagram is the
                                opposite of whatever A is. D is B AND C. The
                                output Q is A or D. If you look at the output
                                for Q, this is identical to the output for A OR
                                B so we have proven the equivalence. We can also
                                prove this using Boolean algebra. This time, we
                                will introduce another notation, that many
                                people find easist to use when manipulating
                                Boolean algebra.&nbsp;
                              </p>
                              <p>
                                For AND, (which remember is the same as
                                multiplication in normal algebra), we just omit
                                the AND, so for example, instead of writing A
                                AND B, we write AB There are occasions when a
                                dot is used as well for AND, so we might also
                                write A.B
                                <br />
                                For OR, which remember is the same as addition
                                in normal algebra, we use the plus sign. For
                                example, instead of writing A OR B, we write A +
                                B.
                                <br />
                                For NOT, we overscore the variable. for example,
                                NOT A becomes
                                <span style="text-decoration: overline">
                                  A.
                                </span>
                              </p>
                              <p>
                                A +
                                <span style="text-decoration: overline">A</span>
                                B = (A + AB) +
                                <span style="text-decoration: overline">A</span>
                                B &nbsp; &nbsp; &nbsp; &nbsp;using the rule that
                                A - A + AB
                                <br />≡ (AA + AB) +
                                <span style="text-decoration: overline">A</span>
                                B &nbsp; using A = AA
                                <br />≡ AA + AB + A
                                <span style="text-decoration: overline">A</span>
                                &nbsp;+
                                <span style="text-decoration: overline">A</span>
                                B &nbsp; adding A
                                <span style="text-decoration: overline">A</span>
                                &nbsp;= 0<br />≡ (A +
                                <span style="text-decoration: overline">A</span>
                                )(A + B) &nbsp; taking out factors
                                <br />≡ 1(A + B) &nbsp;using A +
                                <span style="text-decoration: overline">A</span>
                                &nbsp;= 1<br />≡ (A + B) removing the 1.
                              </p>
                              <p>&nbsp;</p>
                              <p>
                                <strong>(A OR B) AND (A OR C)&nbsp;</strong>≡
                                <strong>
                                  {" "}
                                  A OR (B AND C)
                                  <br />
                                </strong>
                                We will prove this by looking at the two logic
                                diagrams on each side of the equivalence,
                                working out the truth table for each one and
                                then comparing them.
                              </p>
                              <p>
                                <strong>
                                  <img
                                    style="margin: 10px"
                                    src="images/276d2ec1-5193-4163-806e-fc2bed42e7e7no12dia1.GIF"
                                    alt="no12dia1"
                                  />
                                </strong>
                              </p>
                              <p>
                                &nbsp;
                                <img
                                  src="images/f6ebc4c1-6771-4f44-a968-da6457219ca6no12truth1.GIF"
                                  alt="no12truth2"
                                />
                              </p>
                              <p>
                                <img
                                  style="line-height: 1.5"
                                  src="images/2ef42086-ac1b-4e7e-8468-378765cb7b1eno12dia2.GIF"
                                  alt="no12dia2"
                                />
                              </p>
                              <p>
                                &nbsp;
                                <img
                                  src="images/fa5a2c53-f43b-4cbe-8709-cad5c98ffd2ano12truth1.GIF"
                                  alt="no12truth1"
                                />
                              </p>
                              <p>
                                As you can see, we proven that&nbsp;
                                <strong>(A OR B) AND (A OR C)&nbsp;</strong>≡
                                <strong> A OR (B AND C) </strong>and in
                                notation,
                                <strong>(A V B)&nbsp;Λ (A V C)&nbsp;</strong>≡
                                <strong> A V (B&nbsp;Λ C)</strong>
                              </p>
                              <p>We can prove this using Boolean algebra.</p>
                              <p>
                                (A + B)(A + C) = AA + AC + AB + BC &nbsp;
                                &nbsp;using the distributive law
                                <br />
                                ≡&nbsp;A + AC + AB + BC &nbsp; &nbsp; using AA =
                                A<br />
                                ≡&nbsp;A( 1 + C) + AB + BC&nbsp;&nbsp; &nbsp;
                                using&nbsp; 1 + C = 1<br />
                                ≡&nbsp;A. 1 + AB + BC &nbsp; &nbsp; &nbsp;using
                                factoring (distributive law)
                                <br />
                                ≡&nbsp;A(1 + B) + BC &nbsp; &nbsp;
                                &nbsp;using&nbsp;&nbsp;1 + B = 1<br />
                                ≡&nbsp;A. 1 + BC &nbsp; &nbsp;
                                &nbsp;using&nbsp;&nbsp;A . 1 = A <br />
                                ≡&nbsp;A + BC
                              </p>
                              <p>
                                We have now got 12 rules that we can use when
                                specifying Boolean equations, or when we want to
                                look at an existing equation and try to simplify
                                it. There are, however, a few more that we need
                                to know! These are the commutative, associative
                                and distributive laws, and we also need to know
                                and be able to use De Morgan's laws. We will
                                deal with this in future sections.&nbsp;
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

export default The_twelve_basic_equivalences_in_Boolean_logic;
