import React from "react";

function Fixed_and_variable_length_records() {
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
                                Fixed and variable length records
                              </h1>
                              <p>
                                <strong class="NormalContentHeading">
                                  An example of sizing a fixed-length file
                                </strong>
                                <br />
                                Let us look in more detail at how a computerised
                                database might store data using fixed-length
                                records. We will use an example to see how to
                                work out the size of a file that holds
                                fixed-length records and what we need to
                                consider. Information in a computer database is
                                stored in an organised manner. Consider the
                                following database of information, about dogs.
                                There are seven ‘fields’ in each ‘record’ in
                                this ‘file’.
                              </p>

                              <div align="center">
                                <table
                                  border="1"
                                  cellspacing="0"
                                  cellpadding="0"
                                >
                                  <tbody>
                                    <tr>
                                      <td valign="top" width="63">
                                        <p align="center">ID</p>
                                      </td>
                                      <td valign="top" width="84">
                                        <p align="center">Name</p>
                                      </td>
                                      <td valign="top" width="85">
                                        <p align="center">Type</p>
                                      </td>
                                      <td valign="top" width="96">
                                        <p align="center">Date of Birth</p>
                                      </td>
                                      <td valign="top" width="60">
                                        <p align="center">Gender</p>
                                      </td>
                                      <td valign="top" width="84">
                                        <p align="center">Weight (Kg)</p>
                                      </td>
                                      <td valign="top" width="144">
                                        <p align="center">
                                          Owner’s phone number
                                        </p>
                                      </td>
                                    </tr>
                                    <tr>
                                      <td valign="top" width="63">
                                        <p align="center">0001</p>
                                      </td>
                                      <td valign="top" width="84">
                                        <p align="center">Prince</p>
                                      </td>
                                      <td valign="top" width="85">
                                        <p align="center">Poodle</p>
                                      </td>
                                      <td valign="top" width="96">
                                        <p align="center">21/08/02</p>
                                      </td>
                                      <td valign="top" width="60">
                                        <p align="center">M</p>
                                      </td>
                                      <td valign="top" width="84">
                                        <p align="center">15.7</p>
                                      </td>
                                      <td valign="top" width="144">
                                        <p align="center">234232</p>
                                      </td>
                                    </tr>
                                    <tr>
                                      <td valign="top" width="63">
                                        <p align="center">0002</p>
                                      </td>
                                      <td valign="top" width="84">
                                        <p align="center">Gnash</p>
                                      </td>
                                      <td valign="top" width="85">
                                        <p align="center">Bulldog</p>
                                      </td>
                                      <td valign="top" width="96">
                                        <p align="center">03/04/99</p>
                                      </td>
                                      <td valign="top" width="60">
                                        <p align="center">F</p>
                                      </td>
                                      <td valign="top" width="84">
                                        <p align="center">16.5</p>
                                      </td>
                                      <td valign="top" width="144">
                                        <p align="center">554543</p>
                                      </td>
                                    </tr>
                                    <tr>
                                      <td valign="top" width="63">
                                        <p align="center">0003</p>
                                      </td>
                                      <td valign="top" width="84">
                                        <p align="center">Sammy</p>
                                      </td>
                                      <td valign="top" width="85">
                                        <p align="center">Terrier</p>
                                      </td>
                                      <td valign="top" width="96">
                                        <p align="center">10/09/01</p>
                                      </td>
                                      <td valign="top" width="60">
                                        <p align="center">F</p>
                                      </td>
                                      <td valign="top" width="84">
                                        <p align="center">13.9</p>
                                      </td>
                                      <td valign="top" width="144">
                                        <p align="center">654455</p>
                                      </td>
                                    </tr>
                                    <tr>
                                      <td valign="top" width="63">
                                        <p align="center">0004</p>
                                      </td>
                                      <td valign="top" width="84">
                                        <p align="center">Freddy</p>
                                      </td>
                                      <td valign="top" width="85">
                                        <p align="center">Alsatian</p>
                                      </td>
                                      <td valign="top" width="96">
                                        <p align="center">12/12/00</p>
                                      </td>
                                      <td valign="top" width="60">
                                        <p align="center">M</p>
                                      </td>
                                      <td valign="top" width="84">
                                        <p align="center">20.0</p>
                                      </td>
                                      <td valign="top" width="144">
                                        <p align="center">712323</p>
                                      </td>
                                    </tr>
                                    <tr>
                                      <td valign="top" width="63">
                                        <p align="center">0005</p>
                                      </td>
                                      <td valign="top" width="84">
                                        <p align="center">Sammy</p>
                                      </td>
                                      <td valign="top" width="85">
                                        <p align="center">Greyhound</p>
                                      </td>
                                      <td valign="top" width="96">
                                        <p align="center">07/01/97</p>
                                      </td>
                                      <td valign="top" width="60">
                                        <p align="center">F</p>
                                      </td>
                                      <td valign="top" width="84">
                                        <p align="center">18.5</p>
                                      </td>
                                      <td valign="top" width="144">
                                        <p align="center">665643</p>
                                      </td>
                                    </tr>
                                  </tbody>
                                </table>
                              </div>
                              <p style="text-align: center">
                                &nbsp;
                                <strong>A file of records about dogs.</strong>
                              </p>
                              <p>
                                There are five database terms you need to be
                                familiar with.
                              </p>
                              <p>
                                <strong class="NormalContentHeading">
                                  Field
                                </strong>
                                <br />A field is an individual piece of
                                information. In the above example, ID is a
                                field, Name is a field, Type is a field and so
                                on. Fields are also known as ‘attributes’. Note
                                that fields correspond to columns in a table.
                              </p>
                              <p>
                                <strong class="NormalContentHeading">
                                  Record
                                </strong>
                                <br />
                                When you put some data into fields, all the data
                                about one person, or one pet, or one subject and
                                so on, make up a ‘record’. Records correspond to
                                rows in a table. For example, all the
                                information about Prince is referred to as
                                ‘Prince's record’.
                              </p>
                              <p>
                                <strong class="NormalContentHeading">
                                  {" "}
                                  File
                                </strong>
                                <br />
                                All of the records together make up a file of
                                information.
                              </p>
                              <p>
                                <strong class="NormalContentHeading">
                                  Database
                                </strong>
                                <br />
                                Whether you have just one file, or whether you
                                have lots of files in a system, together they
                                are known as a ‘database’. If your files are
                                interconnected in some way, then they are known
                                as a ‘relational database’. You will learn to
                                love relational databases later in the book!
                              </p>
                              <p>
                                <strong class="NormalContentHeading">
                                  Primary key
                                </strong>
                                <br />
                                Every record needs a primary key. It is a piece
                                of data that is <strong>unique</strong> for that
                                record. It can be used to pick out one and only
                                one record. Looking at the small example above,
                                there are 2 dogs called Sammy. Imagine if there
                                were hundreds of dogs called Sammy. We will need
                                to pick out from time to time individual
                                records. Often, the only way we can do this is
                                to add a new field to our database. This field
                                is called the ‘Primary Key’. You may know lots
                                of examples of primary keys - a pupil ID number
                                on the pupil database, a National Insurance
                                number, a driving licence number, a club
                                membership number and so on. Without primary
                                keys, you have no way of picking out
                                <strong>
                                  <em>only</em>
                                </strong>{" "}
                                one particular record. If you are making a
                                database and you don't have a field whose data
                                is unique for each record, then you need to add
                                one, perhaps an ID field, for example.
                              </p>
                              <p>
                                <strong class="NormalContentHeading">
                                  Decide on the data type and size to allow
                                </strong>
                                <br />
                                If you have ever set up a database, then you
                                will have told your application what data type
                                you want to use for each of your fields in a
                                file, and also some information about how much
                                space to allow for each field. This information
                                would be brought together in a document called a
                                ‘<strong>Data Dictionary</strong>'. For example,
                                in the dog file, you may have decided on the
                                following:
                              </p>
                              <p>
                                <strong>ID. </strong>This field is
                                <strong>
                                  <em>not</em>
                                </strong>{" "}
                                a number but is an ID code. Therefore we will
                                not use data type Integer but will use data type
                                text instead. We will assume that the maximum
                                number of dogs that will ever be in this file is
                                5000 so that an ID code of 4 characters long
                                will be fine. We will allow 4 bytes for the ID
                                code, one byte for each character.
                              </p>
                              <p>
                                <strong>Name.</strong> We know that some people
                                give their dogs very long names. It is difficult
                                to judge what to allow so we will allow plenty
                                of room for error. We will allow 50 bytes, data
                                type text.
                              </p>
                              <ul>
                                <li style="list-style-type: none">
                                  <ul>
                                    <li>
                                      <strong>Type.</strong> Let us assume that
                                      we have identified 203 different breeds of
                                      dog. The longest breed name is 28
                                      characters long. If we allow that for each
                                      breed, there will be a lot of waste. For
                                      example, ‘Poodle’ only needs six bytes not
                                      28. Because there are a
                                      <strong>fixed number of choices</strong>,
                                      we will code up the breeds. If we use one
                                      character, we can represent 26 breeds. If
                                      we use 2 characters, we can represent 26 x
                                      26 = 676 breeds. This is more than enough.
                                      We could give Poodle the code PO, Alsatian
                                      AL and so on. We will therefore make this
                                      field data type text and allow 2 bytes.
                                    </li>
                                  </ul>
                                </li>
                              </ul>
                              <ul>
                                <li style="list-style-type: none">
                                  <ul>
                                    <li>
                                      <strong>Date of birth.</strong> This needs
                                      to be in the format DD/MM/YY. This is
                                      therefore data type Date and requires 6
                                      bytes.
                                    </li>
                                  </ul>
                                </li>
                              </ul>
                              <ul>
                                <li style="list-style-type: none">
                                  <ul>
                                    <li>
                                      <strong>Gender.</strong> This is data type
                                      Boolean because a dog can only be either
                                      male or female. Allow 1 bit.
                                    </li>
                                  </ul>
                                </li>
                              </ul>
                              <ul>
                                <li style="list-style-type: none">
                                  <ul>
                                    <li>
                                      <strong>Weight.</strong> This is a real
                                      number. We only need 1 decimal place and
                                      the range of numbers is small therefore
                                      allow 2 bytes. (Real numbers will be
                                      represented using the floating-point
                                      system).
                                    </li>
                                  </ul>
                                </li>
                              </ul>
                              <ul>
                                <li style="list-style-type: none">
                                  <ul>
                                    <li>
                                      <strong>Owner's telephone number.</strong>
                                      This is data type text (because telephone
                                      numbers may include leading zeros and
                                      spaces). We will allow 6 bytes, to
                                      represent 12 digit numbers in BCD format.
                                    </li>
                                  </ul>
                                </li>
                              </ul>
                              <p>We now have the following:</p>
                              <p>
                                ID&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                Text&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 4
                                bytes&nbsp; <br />
                                Name&nbsp;&nbsp;&nbsp;&nbsp;
                                Text&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 50
                                bytes&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                <br />
                                Type&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                Text&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 2
                                bytes&nbsp; <br />
                                DofB&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                Date&nbsp;&nbsp;&nbsp;&nbsp; 6 bytes&nbsp;{" "}
                                <br />
                                Gender&nbsp; Bool&nbsp;&nbsp;&nbsp; &nbsp; 1
                                bit&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <br />
                                Weight&nbsp;&nbsp; Real&nbsp;&nbsp;&nbsp;&nbsp;
                                2 bytes&nbsp; <br />
                                Phone&nbsp;&nbsp;&nbsp;
                                BCD&nbsp;&nbsp;&nbsp;&nbsp; 6 bytes&nbsp;
                              </p>
                              <p align="center">
                                <img
                                  src="images/38a1af93-43db-4024-9ca6-e911783b9df9a.gif"
                                  alt="sizing"
                                />
                                <br />
                                &nbsp;
                              </p>
                              <p>
                                We need to remember when sizing a file that we
                                are
                                <strong>estimating</strong> the file size, not
                                working out an exact size. Therefore, we can
                                round numbers as we see fit. Let’s now look at
                                the five steps in estimating the file size.
                              </p>
                              <p>
                                <strong class="NormalContentHeading">
                                  STEP 1 - Decide on the fields.
                                </strong>
                                <br />
                                Write down the fields you need in your database.
                              </p>
                              <p>
                                <strong class="NormalContentHeading">
                                  STEP 2 - Allocate data types and sizes.
                                </strong>
                                <br />
                                For each field, state what data type it is and
                                then state the number of bytes you are going to
                                allow for that field.
                              </p>
                              <p>
                                <strong class="NormalContentHeading">
                                  STEP 3 - Work out the total size of one
                                  record.
                                </strong>
                                <br />
                                The total size for one record is 4 + 50 + 2 + 6
                                +1bit + 2 + 6 = 70 bytes and 1 bit exactly, or
                                70 bytes approximately.
                              </p>
                              <p>
                                <strong class="NormalContentHeading">
                                  STEP 4 - Work out the maximum size the file
                                  could ever be.
                                </strong>
                                <br />
                                Let’s assume that the maximum number of dogs we
                                are ever going to need to store is 5000.
                                Therefore, the storage space required for the
                                file will be up to 5000 x 70 = 350000 bytes.
                              </p>
                              <p>
                                <strong class="NormalContentHeading">
                                  STEP 5 - Work out the overheads.
                                </strong>
                                <br />
                                When you store files, however, you don't just
                                store the data! For example, information about
                                when the file was created, last accessed, last
                                changed and its size are stored. We refer to
                                these items as ‘<strong>overheads</strong>’. We
                                need to allow some extra storage for these
                                overheads. The rule is to allow 10% of our
                                estimated file size. The size of the overheads
                                in this example can be worked out therefore as
                                10% of 350000, or 35000 bytes.
                              </p>
                              <p>
                                <strong class="NormalContentHeading">
                                  STEP 6 - Work out the total maximum file size,
                                  including overheads.
                                </strong>
                                <br />
                                The total file size is now 350000 + (10% of
                                350000) = 350000 + 35000 = 385000 bytes
                              </p>
                              <p>
                                <strong class="NormalContentHeading">
                                  STEP 7 - Put the answer into appropriate units
                                  and round the answer up or down as
                                  appropriate.
                                </strong>
                                <br />
                                Our final answer is 385000 bytes. The problem is
                                that the units are not the best ones to select.
                                We can do better than this. If we divide our
                                answer by 1000, we will get the answer in Kbytes
                                (Kilobytes) approximately. If we divide an
                                answer by 1000000, we will get the answer in
                                Mbytes (Megabytes). If we divide by 1000000000
                                we will get the answer in Gbytes (Gigabytes).
                                The most sensible thing to do in this example is
                                to divide by 1000. This gives us 385000 / 1000 =
                                385 Kbytes. The answer to this problem, then, is
                                that the file size is approximately 400 Kbytes
                                long. Don't be afraid to round up or round down
                                numbers! Just remember to put 'approximately'
                                with the answer. If you round an answer, it
                                demonstrates that you understand what you are
                                doing, that you are
                                <strong>estimating</strong> and not working out
                                exact numbers.
                              </p>
                              <p>
                                <strong>
                                  A summary of how to size a fixed-length file
                                  of records
                                </strong>
                              </p>
                              <ul>
                                <li style="list-style-type: none">
                                  <ul style="list-style-type: disc">
                                    <li>Decide what fields you need.</li>
                                    <li>
                                      Decide how many bytes you need for each
                                      field, justifying your decisions.
                                    </li>
                                    <li>
                                      Add up the total numbers of bytes for 1
                                      record. Round the answer if it helps.
                                    </li>
                                    <li>
                                      Multiply the size of one record by the
                                      maximum number of records you are likely
                                      to store.
                                    </li>
                                    <li>Add 10% for overheads.</li>
                                    <li>
                                      Put your answer in appropriate units.
                                      Round the answer if it helps.
                                    </li>
                                    <li>
                                      Put approximately next to your answer.
                                    </li>
                                  </ul>
                                </li>
                              </ul>
                              <p>
                                <span class="NormalContentHeading">
                                  <strong>Variable-length records</strong>
                                </span>
                                <strong>
                                  <br />{" "}
                                </strong>{" "}
                                Whilst fixed-length records are relatively easy
                                to process, they can waste a lot of storage
                                space on disk, especially when a short length
                                data item of, for example, five bytes has been
                                entered into a text field that has been defined
                                as a long fixed length of perhaps 30 characters
                                long. 25 bytes of valuable storage space are
                                going to be wasted each time we do this. One way
                                to address this problem is to use
                                variable-length records. This system is more
                                complicated than fixed-length systems because
                                calculations have to be done but this system
                                will save storage space. Suppose you had to
                                store the following data:
                              </p>
                              <table border="1" cellspacing="0" cellpadding="0">
                                <tbody>
                                  <tr>
                                    <td valign="top" width="232">
                                      <p>
                                        First name: Fred
                                        <br />
                                        Second name: Jones
                                        <br />
                                        Name of course: Art
                                      </p>
                                    </td>
                                    <td valign="top" width="232">
                                      <p>
                                        First name: Mandy
                                        <br />
                                        Second name: Shu
                                        <br />
                                        Name of course: English
                                      </p>
                                    </td>
                                    <td valign="top" width="232">
                                      <p>
                                        First name: Ali
                                        <br />
                                        Second name: Patel
                                        <br />
                                        Name of course: Mathematics
                                      </p>
                                    </td>
                                  </tr>
                                </tbody>
                              </table>
                              <p style="text-align: center">
                                <strong>
                                  Some records we want to store as
                                  variable-length records.
                                </strong>
                              </p>
                              <p>
                                In a fixed-length system, you might have defined
                                the following:
                              </p>
                              <ul>
                                <li style="list-style-type: none">
                                  <ul style="list-style-type: disc">
                                    <li>
                                      First name: data type text, allow 30
                                      characters.
                                    </li>
                                    <li>
                                      Second name: data type text, allow 30
                                      characters.
                                    </li>
                                    <li>
                                      Name of course: data type text, allow 4
                                      characters, coded.
                                    </li>
                                  </ul>
                                </li>
                              </ul>
                              <p>
                                If we stored Fred Jones who is on an Art course,
                                we should actually need only 4+5+3 = 12 bytes
                                but would in fact use 64 bytes. This is because
                                all of the fields in the record are a fixed
                                size. If we stored the records using a
                                variable-length system, we could
                                diagrammatically represent what we are storing
                                as:
                              </p>
                              <p
                                style="text-align: left; margin-left: 30px"
                                align="center"
                              >
                                <strong>
                                  Fred$Jones$Art#Mandy$Shu$English#Ali$Patel$Mathematics#
                                </strong>
                              </p>
                              <p>Note two points about this system: &nbsp;</p>
                              <ul style="list-style-type: disc">
                                <li style="list-style-type: none">
                                  <ul style="list-style-type: disc">
                                    <li>
                                      The end of a field is signalled by a
                                      dollar sign (EndOfField marker).
                                    </li>
                                    <li>
                                      A hash sign signals the end of a record
                                      (EndOfRecord marker).
                                    </li>
                                  </ul>
                                </li>
                              </ul>
                              <p>
                                Imagine a user wants to enter some data into
                                their database. The user starts to enter data.
                                They enter the first piece of data into the data
                                input form where it says “First name”. When the
                                user presses ENTER and moves to the next data
                                entry field, a dollar sign is automatically
                                inserted after the field by the database
                                software. The second name is then entered. As
                                soon as the user presses ENTER again to go to
                                the ‘Name of course’ field, another dollar sign
                                is automatically entered after that field. After
                                the user presses ENTER again (to enter the name
                                of the course and to get a new blank data input
                                form up on the screen) a hash symbol is entered.
                                This signals the end of the record. The whole
                                process is repeated for the next record, and the
                                next, and so on.
                              </p>
                              <p>
                                Now there is no space wasted to store each
                                record. If we stored Fred Jones who is on an Art
                                course, we would need only <br />
                                5+6+4 = 15 bytes (including two EndOfField
                                markers and an EndOfRecord markers). These
                                markers can easily be used by a program when
                                reading records back from a file. All it has to
                                do is keep looking for EndOfField markers and
                                EndOfRecord markers. These will signal the end
                                of a particular piece of data or a particular
                                record.
                              </p>
                              <p>
                                <strong>
                                  Appropriate uses of fixed and variable length
                                  records
                                </strong>
                              </p>
                              <ul>
                                <li style="list-style-type: none">
                                  <ul>
                                    <li>
                                      Variable-length records save space and
                                      produce a smaller overall file of records.
                                      If storage space is important, then this
                                      might be the record type to design.
                                    </li>
                                    <li>
                                      A smaller file of records is quicker to
                                      work with (for example, to search and
                                      sort) than a larger file.
                                    </li>
                                    <li>
                                      Variable-length systems are more complex
                                      to program compared to fixed-record
                                      systems.
                                    </li>
                                    <li>
                                      It is easier to estimate the overall file
                                      size with fixed-length records than
                                      variable-length records. You have to make
                                      assumptions about the average size of
                                      fields, which may not be easy to do or
                                      correct.
                                    </li>
                                  </ul>
                                </li>
                              </ul>
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

export default Fixed_and_variable_length_records;
