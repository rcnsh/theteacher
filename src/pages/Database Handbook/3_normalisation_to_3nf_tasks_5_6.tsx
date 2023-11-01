import React from "react";

function normalisation_to_3nf_tasks_5_6() {
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
                              <p>&nbsp;</p>
                              <h1 style="text-align: center">Tasks 5 - 6</h1>
                              <p>
                                <span style="line-height: 1.5">
                                  <strong>TASK 5</strong> &nbsp;An employment
                                  officer in an employment agency fills out a
                                  form every time a person who is looking for
                                  work registers with them. A typical form is
                                  shown below. &nbsp;Your job is to produce a
                                  normalised structure for a database. This
                                  looks more complicated for two reasons. The
                                  first is that when going from UNF to 1NF,
                                  there are two repeating groups, not one. The
                                  other problem is that we need to give careful
                                  consideration to the primary keys in the
                                  repeating groups. They are not simple!&nbsp;
                                </span>
                              </p>

                              <p style="text-align: center">
                                <span style="line-height: 1.5">
                                  <img
                                    src="images/e3a36df5-6581-4b01-b4fd-818daee722f9t14.JPG"
                                    alt="t14"
                                  />
                                </span>
                              </p>
                              <p style="margin-left: 30px">
                                <em>
                                  <strong>
                                    Notes to help you with TASK 5; Going from
                                    UNF to 1NF - Looking for repeating groups
                                  </strong>
                                </em>
                                <br />
                                <em>
                                  As usual, we list all the attributes from the
                                  form. We then identify the repeating groups
                                  and put these into brackets. In this example,
                                  there are actually two sets of repeating
                                  groups. We treat these in exactly the same way
                                  so that we have two groups in brackets. A new
                                  job hunter’s details, along with their
                                  employment officer’s details, are entered in
                                  only once. All of these details therefore get
                                  transferred over into one group in the 1NF
                                  column. Note that the employment officer did
                                  not get their own primary key in the UNF
                                  column. This is because the employment officer
                                  is part of the new job hunter’s details at the
                                  moment.
                                </em>
                              </p>
                              <p style="margin-left: 30px">
                                <em>
                                  How can we pick a key for the employer group
                                  of attributes? Each row in this table must
                                  have a unique primary key. We are not going to
                                  make life easy for ourselves this time and
                                  just add an extra ID attribute - we will use
                                  the attributes we are given!{" "}
                                </em>
                                <br />
                                <em>
                                  Looking at the example form, if we selected
                                  Employer name as the primary key, we would not
                                  be able to pick out just one employment
                                  history because this job hunter has worked for
                                  the same employer on more than one occasion.
                                  The job hunter may have started two part-time
                                  jobs on the same day so StartDate on its own
                                  wouldn’t work either. If we selected both
                                  Employer and StartDate, however, then we will
                                  be always able to pick out one row in the
                                  employment table. We will select this as our
                                  primary key. Of course, we need to add the
                                  primary key from the non-repeating group to
                                  it. So we end up with a primary key made up of
                                  three attributes: Employer, StartDate and
                                  JobHunterID. Draw out the table with some
                                  made-up data in it if you are confused!
                                </em>
                              </p>
                              <p style="margin-left: 30px">
                                <em>
                                  Looking at the repeating group for
                                  qualifications, we can’t select just Subject
                                  as the primary key for this table because a
                                  job hunter may have done Maths at GCSE level
                                  and then at A Level, for example. We must pick
                                  a primary key that allows us to uniquely
                                  identify each row. If we selected Level, they
                                  may have done more than one subject at a
                                  particular level so that one won’t work
                                  either. Neither will Grade and Year for the
                                  same reasons. If, however, we selected a
                                  compound key made up of Subject and Grade then
                                  for any Subject and any Grade we will be able
                                  to pick out one and only one record in that
                                  table. If we now add to this key the primary
                                  key from the non-repeating group, we will have
                                  finished. For any job hunter number, subject
                                  and grade, we will be able to pick out one
                                  unique record in the qualifications table! As
                                  before, draw out the table with some made-up
                                  data in it if you are confused!
                                </em>
                              </p>
                              <p style="margin-left: 30px">
                                <em>
                                  <strong>
                                    Going from 1NF to 2NF - Looking for non-key
                                    attributes that depend upon all attributes
                                    in compound primary keys
                                  </strong>
                                </em>
                                <br />
                                <em>
                                  In the employers’ table, an employer’s address
                                  only depends upon the employer. It doesn’t
                                  depend on the other parts of the primary key.
                                  It doesn’t depend upon the job hunter number
                                  or start address. Employer and the employer’s
                                  address need to be moved into their own group.
                                  The other three non-key attributes will need
                                  the entire compound key to get back a unique
                                  row. Looking at the qualifications table in
                                  the 1NF column, if you wanted to get a
                                  particular grade back or the year that a
                                  qualification was taken, then you are going to
                                  have to supply the job hunter, the subject and
                                  the level attributes. So in this case, you
                                  need to supply all three parts of the compound
                                  primary key to get back any of the non-key
                                  details. This table is therefore already in
                                  2NF.
                                </em>
                              </p>
                              <p style="margin-left: 30px">
                                <em>
                                  <strong>
                                    Going from 2NF to 3NF - Looking for non-key
                                    attributes that depend upon other non-key
                                    attributes
                                  </strong>
                                </em>
                                <br />
                                <em>
                                  Working methodically through all the tables,
                                  checking to see if any non-key attribute
                                  depends upon another non-key attribute in that
                                  table takes a while. However, as we do this,
                                  we should see that the details of the
                                  employment officer are related directly to the
                                  OfficerID. We therefore need to put OfficerID,
                                  their name, title and phone number into their
                                  own group, remembering to leave a foreign key
                                  behind! You should have five tables when you
                                  have finished normalising the database to 3NF.
                                </em>
                              </p>
                              <p>
                                <strong>TASK 6</strong> &nbsp;A travel agency
                                keeps details of each customer’s flight
                                purchasing history for marketing purposes. A
                                typical record is shown below. Normalise the
                                form.
                              </p>
                              <p style="text-align: center">
                                <img
                                  src="images/8b99f147-6f52-4187-b52a-0e84b2140c0dt12.JPG"
                                  alt="t12"
                                />
                              </p>
                              <p>
                                &nbsp;Use this table to help you with your
                                answer to task 6.
                              </p>
                              <p style="text-align: center">
                                <img
                                  src="images/1c83c9d6-a543-4b7b-8642-415a00997d6ct13.JPG"
                                  alt="t13"
                                />
                              </p>
                              <p style="margin-left: 30px">
                                <em>
                                  <strong>
                                    Notes to help you with TASK 6:
                                  </strong>
                                </em>
                              </p>
                              <ol>
                                <li style="list-style-type: none">
                                  <ol>
                                    <li>
                                      <em>
                                        There are two repeating groups. This
                                        isn’t a problem - you can have as many
                                        repeating groups as you need!
                                      </em>
                                    </li>
                                    <li>
                                      <em>
                                        You need to make sure that you can pick
                                        out only one record from the Flights
                                        repeating group. No single key will
                                        allow you to pick out one and only one
                                        flight. There may be more than one
                                        purchase with the same flight code, or
                                        using the same airline, or for the same
                                        date. We need a compound primary key. If
                                        we select the flight code along with the
                                        flight date, we will be able to pick out
                                        any individual flight. It’s hard to
                                        imagine someone taking the same flight
                                        (i.e. the same leaving and departure
                                        points) on the same day more than once!
                                      </em>
                                    </li>
                                    <li>
                                      <em>
                                        The money exchange table is more
                                        complicated. The only way to pick out
                                        one particular record in the currency
                                        table is to have details about the
                                        amount changed, when they changed the
                                        currency and what currency they changed
                                        it into. The compound primary key for
                                        this table is therefore made up of three
                                        attributes. We will assume that a
                                        customer never changes the same amount
                                        of money into the same currency more
                                        than once on any particular day. (How
                                        reasonable do you think this assumption
                                        is? If you think this is an unreasonable
                                        assumption to make, what might you do
                                        about it?)
                                      </em>
                                    </li>
                                    <li>
                                      <em>
                                        The exchange rate on any given day
                                        depends upon what currency you are
                                        talking about and the date of the
                                        transaction. We will assume that the
                                        rate doesn’t vary depending upon how
                                        much currency you change. (How
                                        reasonable do you think this assumption
                                        is? If you think this is unreasonable,
                                        what might you do about it?)
                                      </em>
                                    </li>
                                    <li>
                                      <em>
                                        The flight code tells you what airline
                                        is being used as well as coded
                                        information about the departure and
                                        destination points.
                                      </em>
                                    </li>
                                    <li>
                                      <em>
                                        If you normalise this form correctly,
                                        you will finish with seven tables.
                                      </em>
                                    </li>
                                  </ol>
                                </li>
                              </ol>
                              <p>&nbsp;</p>
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

export default normalisation_to_3nf_tasks_5_6;
