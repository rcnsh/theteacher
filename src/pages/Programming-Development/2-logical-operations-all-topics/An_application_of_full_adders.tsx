import React from "react";

function An_application_of_full_adders() {
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
                                An application of full adders
                              </h1>
                              <p class="NormalContent">
                                <strong>
                                  <strong>
                                    Introduction
                                    <br />
                                  </strong>
                                </strong>
                                We started by looking at half adders, which
                                added just two bits. We then moved on to
                                understanding how to add a far more useful three
                                bits in a design called a 'full adder'. We saw
                                that there are a number of ways of implementing
                                this design and now we will take a brief look at
                                an application of it.
                              </p>

                              <p class="NormalContent">
                                We saw in the full adder section that there were
                                different ways to design a full adder using
                                logic gates. They all work in the same way, so
                                we can actually put the design inside a black
                                box to use it. We don't really need to know how
                                a full adder was designed to be able to design
                                uses for it. Here is the logic gate design using
                                two half adders and an OR gate:
                              </p>
                              <p class="NormalContent">
                                <img
                                  style="margin: 10px; vertical-align: middle"
                                  src="images/154ee7cb-9ff6-4b04-acd9-b739dd708d3cfulladder.GIF"
                                  alt="fulladder"
                                />
                              </p>
                              <p class="NormalContent">
                                If we put this design inside a black box, we now
                                have:
                              </p>
                              <p class="NormalContent">
                                <img
                                  style="margin: 10px; vertical-align: middle"
                                  src="images/057608f2-503b-49c2-87ef-7cba65190c6dfulladderblackbox.GIF"
                                  alt="fulladderblackbox"
                                />
                              </p>
                              <p class="NormalContent">
                                This is an example of 'abstraction', where we
                                take something that is quite complicated and
                                'hide' the details in a simplified model,
                                leaving something that is much easier to
                                understand and a lot easier to use.
                              </p>
                              <p class="NormalContent">
                                We have two inputs as before, A and B, plus a
                                third input, which is the carry from a previous
                                addition. The component generates a Sum and a
                                Carry, which we will call C<sub>out</sub>. We
                                can now think of this as a single component. We
                                know how it works but what goes on inside the
                                component is not of interest to us. If we
                                connected four of these components together,
                                then we can start adding binary numbers that are
                                any length long. We can do this, because we add
                                binary numbers in columns, and we can feed the
                                carry out from one component into the C
                                <sub>in</sub>
                                of the next component. Here is a model of a 4
                                bit adder:
                              </p>
                              <p class="NormalContent">
                                <img
                                  style="margin: 10px; vertical-align: middle"
                                  src="images/78aec6ff-c664-4101-aba3-86e1be58a6804bitadder.GIF"
                                  alt="4bitadder"
                                />
                              </p>
                              <p class="NormalContent">
                                Take note that in the very first addition in the
                                full adder on the right hand side, there is no
                                carry so that input is always forced to be zero.
                                We could now go out and buy four full adder
                                components, wire them up in the way that you can
                                see in the design and use it to add any four bit
                                numbers together, such as this:
                              </p>
                              <p class="NormalContent">
                                <img
                                  style="margin: 10px; vertical-align: middle"
                                  src="images/f4b07994-efcd-413e-9e87-abb60df005f4add4bits.GIF"
                                  alt="add4bits"
                                />
                                <br />
                                This design is very simple and relatively easy
                                to understand. In computing terms, it is quite
                                slow and there are better designs available.
                                Perhaps you could see if you could find some on
                                the Internet.
                              </p>
                              <p class="NormalContent"></p>
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

export default An_application_of_full_adders;
