import React from "react";

function Validation() {
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
                              <h1 style="text-align: center">Validation</h1>
                              <p>
                                <strong style="line-height: 1.5">
                                  Data validation
                                  <br />
                                </strong>
                                Validation is the term used to ensure that only
                                'sensible' data is entered into a database.
                                These rules are set up, for example, on a
                                database on a computer and the computer then
                                automatically checks the data entered against
                                these rules. Sensible data means that it is of
                                the correct data type and it follows the rules
                                set up for that piece of data. (Don't use the
                                phrase 'correct data’ - some exam boards don't
                                like it!)&nbsp;There are a number of different
                                ways of setting up validation rules. We will
                                look at these in turn.
                              </p>
                              <p>
                                <strong>Range checks</strong>
                                <br />
                                You can set up rules to ensure that if someone
                                enters a number it must follow some mathematical
                                rules, for example, be greater than a number, or
                                less than or equal to a number or be between two
                                numbers and so on. We have already seen an
                                example of setting up rules for an AGE field. If
                                a value is entered outside of this range, then a
                                helpful error message should be displayed. These
                                are the maths symbols used in range checks:
                              </p>

                              <p style="margin-left: 30px">
                                &lt; Less than <br />
                                &lt; = Less than or equal to
                                <br />
                                &gt; Greater than
                                <br />
                                &gt; = Greater than or equal to
                                <br />
                                &lt; &gt; Not equal to
                              </p>
                              <p>
                                If you have a problem remembering which maths
                                symbol is which for less than and greater than,
                                try remembering that the L in Less looks very
                                similar and points in the same direction as the
                                maths symbol &lt;.
                              </p>
                              <p>
                                <strong>Format check</strong>
                                <br />
                                Sometimes, especially with membership and ID
                                identifying codes, the code is made up of a
                                mixture of numbers and letters. For example, a
                                national chess club may have a membership ID
                                that is made up of 2 letters, followed by 3
                                numbers, followed by a letter, for example,
                                RG662P. You can set up rules that look for
                                patterns such as:
                              </p>
                              <p style="margin-left: 30px">
                                <strong>
                                  LETTER-LETTER-NUMBER-NUMBER-NUMBER-LETTER.
                                </strong>
                              </p>
                              <p>
                                If TYP23F is entered into a data input form, it
                                will not get put in the database. It will be
                                rejected and a helpful error message should pop
                                up! This kind of check is known as a ‘format
                                check’.
                              </p>
                              <p>
                                <strong>Length check</strong>
                                <br />
                                In text fields, you can tell a database to
                                accept an entry only if it is less than a
                                certain number of characters. For example, you
                                might set a field up called COLOUR to be less
                                than or equal to 10 characters. If someone
                                entered BLUE WITH A HINT OF MANGO, it would get
                                rejected because it doesn't follow the
                                validation rule.
                              </p>
                              <p>
                                <strong>Allowable values check</strong>
                                <br />
                                You can set up fields to only accept certain
                                values. For example, you might have the Boolean
                                field GENDER set up to only accept MALE or
                                FEMALE. You might set up a text field called
                                WHEN DO YOU WANT TO LEAVE? so that it can only
                                accept MORNING, NOON or EVENING.
                              </p>
                              <p>
                                <strong>Check digit</strong>
                                <br />
                                Commonly used on bar codes, this is a technique
                                used to see if a number has been entered
                                correctly. A number, called a check digit, is
                                placed at the end of a code. The bar code is
                                read and the check digit calculated. If the
                                result is the same as the check digit, then the
                                code has been read correctly. If they are
                                different, then the item will have to be read in
                                again.
                              </p>
                              <p>
                                There are different methods of working out check
                                digits. For example, the 13 digit ISBN code for
                                this book is 978-0-954351472. The check digit is
                                the number on the right hand side, 2. A barcode
                                scanner would read the first 12 digits of the
                                ISBN code and then see if it got a 2. If it did
                                get a 2, it would know that the ISBN code had
                                probably been scanned correctly. How does it
                                work out the check digit?
                              </p>
                              <p>
                                <em>
                                  <strong>
                                    First, it multiplies each digit in turn by a
                                    1, then a 3, then a 1, then a 3 and so on,
                                    and adds up the result, like this:
                                  </strong>
                                </em>
                              </p>
                              <p>
                                <em>
                                  <strong>
                                    (9 x 1) + (7 x 3) + (8 x 1) + (0 x 3) + (9 x
                                    1) + (5 x 3) + (4 x 1) + (3 x 3) + (5 x 1) +
                                    (1 x 3) + (4 x 1) + (7 x 3) = 138
                                  </strong>
                                </em>
                              </p>
                              <p>
                                <em>
                                  <strong>
                                    Next, it divides the 138 by 10 to get 13
                                    remainder 8.
                                  </strong>
                                </em>
                              </p>
                              <p>
                                <em>
                                  <strong>
                                    Finally, it subtracts the reminder from 10,
                                    so 10 – 8 = 2. (This system uses something
                                    called ‘modulo 10’, which just means the
                                    remainder after you divide a number by 10).
                                  </strong>
                                </em>
                              </p>
                              <p>
                                <em>
                                  <strong>
                                    As you can see, the check digit is 2, which
                                    is also the number on the right hand side of
                                    the 13 digit ISBN code. Do note that 10
                                    digit ISBN numbers use a different system to
                                    the one described here.
                                  </strong>
                                </em>
                              </p>
                              <p>
                                <strong>Presence or ‘Required’ check</strong>
                                <br />
                                Some fields are more important than others and
                                must be filled in. For example, suppose you had
                                a database that stored car adverts. A customer
                                rings up to place an advert and the operator
                                types the advert into the database using a data
                                input form. If the customer doesn't know the
                                colour of the car, it is not a disaster and so
                                it doesn't need to be filled in. If the customer
                                has forgotten his or her telephone number,
                                however, this is a problem - how can anyone
                                contact him to buy the car? This field cannot be
                                left blank. If the operator presses ENTER to
                                enter the whole advert and this field has been
                                missed out, then a helpful error message should
                                appear. This kind of rule is known as a
                                ‘presence check’.
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

export default Validation;
