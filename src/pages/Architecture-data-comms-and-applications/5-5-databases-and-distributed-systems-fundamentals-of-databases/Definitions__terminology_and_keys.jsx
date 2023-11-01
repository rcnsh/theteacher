import React from "react";

function Definitions__terminology_and_keys() {
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
                                Definitions, terminology and keys
                              </h1>
                              <p>
                                <strong class="NormalContentHeading">
                                  Introduction
                                </strong>
                                <br />
                                There is a lot of technical words in relational
                                database modelling. These are explained in
                                detail below.
                              </p>

                              <p
                                style="
                              margin-top: 10px;
                              line-height: 16.3636360168457px;
                            "
                              >
                                <strong>Entities and attributes</strong>
                                <br />
                                An ‘entity’ is the term used to describe
                                something we keep information about. Attributes
                                are the pieces of information we keep about an
                                entity. For example, we might have a pupil
                                database. The entity here is 'Pupil' because
                                that is what we keep information about. The
                                attributes are the pieces of information about a
                                pupil, such as their first name, surname, date
                                of birth, form group and so on. In a library,
                                you might keep information about books. 'Book'
                                would be the entity and name of book, author,
                                ISBN number and so on would be the attributes.
                              </p>
                              <p style="line-height: 16.3636360168457px">
                                <strong>Tables</strong>
                                <br />
                                Once we have identified an entity, and we know
                                what attributes we want to keep about each
                                entity, we can then store the actual pieces of
                                information about each entity. We can think of a
                                database that holds entities and attributes as a
                                table. Consider this example. It holds records
                                about dogs.
                              </p>
                              <p style="line-height: 16.3636360168457px">
                                <img
                                  src="images/37e2ae93-f80d-4cce-8fa2-abeba97b3d08Table.GIF"
                                  alt="Table"
                                />
                              </p>
                              <ul style="line-height: 16.3636360168457px">
                                <li style="list-style-type: none">
                                  <ul style="list-style-type: disc">
                                    <li>
                                      All of the details about one actual dog is
                                      called a 'record'.
                                    </li>
                                    <li>
                                      Another name for a record is a '
                                      <strong>tuple</strong>'.
                                    </li>
                                    <li>
                                      The records correspond to a row in a
                                      table.
                                    </li>
                                    <li>
                                      All the pieces of information about the
                                      dogs, the 'attributes', are held in the
                                      columns of the table.
                                    </li>
                                    <li>
                                      Another name for an attribute is a
                                      'field'.
                                    </li>
                                    <li>
                                      The headings in a column tell you what the
                                      attribute is in that column. They are the
                                      'field names' and usually make up the
                                      first row in a table.
                                    </li>
                                    <li>
                                      The individual pieces of information, the
                                      actual pieces of data, are called 'data
                                      items'.
                                    </li>
                                    <li>
                                      All of the records together, all of the
                                      rows, form a 'table'.
                                    </li>
                                  </ul>
                                </li>
                              </ul>
                              <p
                                style="
                              margin-bottom: 10px;
                              line-height: 16.3636360168457px;
                            "
                              >
                                <strong>Files and databases</strong>
                                <br />
                                Another name for a table of records is a 'file'.
                                A database can be defined as one or more files.
                                You can have a simple database, with all the
                                information held in just one table.You could
                                also have a bigger database, where all of the
                                entities have been logically split up into
                                different tables. For example, a school database
                                might have one table for students, another for
                                staff, another for all the information about
                                different qualifications, a table for records
                                about each room and the facilities in each room
                                and so on.
                              </p>
                              <p class="NormalContentHeading">
                                <strong>
                                  <strong style="line-height: 16.3636360168457px">
                                    Primary Keys
                                    <br />
                                  </strong>
                                </strong>
                                <span style="line-height: 16.3636360168457px">
                                  Each record in each table must have one field
                                  that is unique, to ensure that each record can
                                  be differentiated from the others, even if the
                                  other fields are the same. You all have a
                                  unique student number, a unique NI number, you
                                  may have a tax number, a driving licence
                                  number, a club membership number and so on.
                                  These numbers are always different for each
                                  record, even if e.g. someone else has the same
                                  name as you.
                                </span>
                                &nbsp;
                              </p>
                              <ul>
                                <li style="list-style-type: none">
                                  <ul style="list-style-type: disc">
                                    <li>
                                      Every entity must have one attribute that
                                      is also known as the primary key. If an
                                      entity of records does not have a primary
                                      key attribute, then you must add one!
                                    </li>
                                    <li>
                                      A primary key is used to either find one
                                      record, or is used to sort a file in
                                      primary key order.
                                    </li>
                                    <li>
                                      The primary key, usually an ID number of
                                      some kind, is unique, for each record. You
                                      cannot have two records with the same
                                      primary key value.
                                    </li>
                                    <li>
                                      Many primary keys are made up of just one
                                      attribute. There are lots of
                                      circumstances, however, when the primary
                                      key is made up of 2, 3 or even more
                                      attributes. It is then known as a compound
                                      primary key. If you have normalised a
                                      database to 3NF, you will probably have
                                      seen an entity with a compound primary
                                      key.
                                    </li>
                                  </ul>
                                </li>
                              </ul>
                              <p class="NormalContentHeading">
                                <strong>
                                  Candidate Keys
                                  <br />
                                </strong>
                                When you look at any table, most of the time the
                                primary key will stand out. Often, it will be
                                called something like Order Number, Student ID,
                                Member ID and so on and these clearly will be
                                unique. However, it may be that more than one of
                                the attributes (i.e. more than one of the
                                columns) in a table are unique, or perhaps, more
                                than one combination of attributes are unique
                                (compound keys). All of these are together known
                                as potential 'Candidate keys' for that table, as
                                they could all ultimately be chosen as a
                                suitable primary key.
                              </p>
                              <p class="NormalContentHeading">
                                <strong>
                                  Foreign Keys
                                  <br />
                                </strong>
                                Relational databases have more than one table.
                                Records from each of the tables are combined to
                                form the complete record of someone or
                                something. Foreign keys are used to link the
                                different records in different tables, so the
                                database software knows which record in one
                                table belongs to which record in another table.
                                <strong>
                                  <br />
                                </strong>
                              </p>
                              <ul style="list-style-type: disc">
                                <li style="list-style-type: none">
                                  <ul style="list-style-type: disc">
                                    <li>
                                      Foreign keys are used to link entities.
                                    </li>
                                    <li>
                                      A foreign key in one table is a primary
                                      key in another table.
                                    </li>
                                    <li>
                                      Although primary keys cannot have
                                      duplicate values in a table, foreign keys
                                      most definitely can. You have a situation
                                      where the same attribute cannot be
                                      duplicated in one table but can be
                                      duplicated in another!
                                    </li>
                                    <li>
                                      When you have a one-to-many relationship
                                      between two entities, you will need to
                                      link them using a foreign key. To do this,
                                      always copy the primary key from the
                                      entity on the 'one' side of the
                                      relationship and put it in the table on
                                      the 'many' side. In the table on the 'one'
                                      side, it is known as a ‘primary key’. In
                                      the table on the 'many' side, it is known
                                      as a ‘foreign key’.
                                    </li>
                                  </ul>
                                </li>
                              </ul>
                              <p>
                                <strong>
                                  <span class="NormalContentHeading">
                                    Secondary keys
                                  </span>
                                </strong>
                                <br />
                                Very often, you may want to access a database by
                                an attribute other than the primary key.
                                Consider a textbook. Most of the time, a reader
                                will want to access a particular topic in a
                                book, so there exists a main contents page to
                                allow them to do this. Sometimes, however, they
                                want to look up specific things, so an index at
                                the back of the book is provided. And sometimes,
                                however, the reader may be more interested in
                                looking at all the pictures! To enable this to
                                happen, another index is provided - an index of
                                pictures and where to find them! In this
                                example, if a reader wanted to look at all the
                                pictures, they could still go to the contents
                                page and use that if they wanted to but it would
                                take a long time, especially if it was a thick
                                book. Now they have a secondary index file they
                                can get back just the pictures whenever they
                                want - and quickly. Secondary keys, then, enable
                                a user to access data in an order other than the
                                primary key order and they allow a user to
                                filter what data to display. New secondary
                                indexed files are created because a different
                                set of information is required (possibly in a
                                different order) from the main set of records
                                frequently enough to justify doing it. If a
                                particular set of information were needed once
                                in ten years, it wouldn't be worth the overheads
                                of setting one up.
                              </p>
                              <p>
                                <strong>
                                  <span class="NormalContentHeading">
                                    Another example of the use of secondary keys
                                  </span>
                                </strong>
                                <br />
                                For example, imagine a bus company that stores
                                bus details. It might have in a typical record
                                the bus code, departure and arrival points,
                                times of arrival and departure, number of seats
                                in the bus and drop-off points. You could easily
                                get a list of all the buses, listed by the
                                primary key (the bus code) from the main file.
                                But when someone goes to the bus company to buy
                                a ticket, they just want to know only when the
                                buses leave from their town to London. Now this
                                is a question that the bus company might get
                                asked one hundred times a day! They could run a
                                query. They would need to set one up and then
                                check the record of every bus. If they had 20000
                                buses, checking each of them would be time
                                consuming, especially if they had to do this so
                                many times every single day! So instead, they
                                set up a secondary index file, which only has
                                buses from the hometown to London and the time
                                of departure. It will be ordered according to a
                                secondary key that has been set up. The result
                                of using a secondary index file with a secondary
                                key is faster access to the information the
                                customer wants!
                              </p>
                              <p
                                style="
                              margin-top: 10px;
                              line-height: 16.3636360168457px;
                            "
                              >
                                <strong>Referential integrity</strong>
                                <br />
                                Referential integrity is the term used to
                                describe when all the links between tables using
                                foreign keys are present and valid. If a record
                                in one table refers to a record in another
                                table, and that record is actually missing for
                                some reason, then we talk about the lack of data
                                integrity.&nbsp;Consider these two tables. The
                                first table is a list of Dog Owners and the
                                second table is a list of Dogs. The relationship
                                between the two tables is a one-to-many:
                              </p>
                              <ul style="line-height: 16.3636360168457px">
                                <li style="list-style-type: none">
                                  <ul>
                                    <li>Each owner can own many dogs.</li>
                                    <li>
                                      Each dog is owned by just one owner.
                                    </li>
                                  </ul>
                                </li>
                              </ul>
                              <p style="line-height: 16.3636360168457px">
                                <img
                                  style="
                                display: block;
                                margin-left: auto;
                                margin-right: auto;
                              "
                                  src="images/3d088bba-0298-400d-b6f1-a3d0e16a77fd4.gif"
                                  alt
                                />
                              </p>
                              <p style="line-height: 16.3636360168457px">
                                <span style="line-height: 1.5">
                                  In the&nbsp;
                                </span>
                                <strong style="line-height: 1.5">
                                  <em>last column</em>
                                </strong>
                                <span style="line-height: 1.5">
                                  &nbsp;of the Dogs table, you can see the
                                  foreign key, ID. This foreign key is also a
                                  primary key in the Dog Owners table and the
                                  value tells you which record each dog links to
                                  in the Dog Owners table. In other words, the
                                  value tells you who the dog owner is.
                                </span>
                              </p>
                              <p style="line-height: 16.3636360168457px">
                                <span style="line-height: 1.5">
                                  Now imagine for some reason that record number
                                  3, Mr D Lapidated, was deleted from the Dog
                                  Owners table. This may have been done by
                                  accident or may have been done deliberately.
                                  The problem that exists in the database now is
                                  that you have two records in the Dogs table
                                  (the dogs called Manic and Blip) that refer to
                                  a record in the Dog Owners table that doesn't
                                  exist. The integrity of the data has been
                                  broken and this can cause all kinds of errors
                                  in a database.
                                </span>
                              </p>
                              <p
                                style="
                              margin-bottom: 10px;
                              line-height: 16.3636360168457px;
                            "
                              >
                                <span style="line-height: 1.5">
                                  To prevent this from happening, you can often
                                  select an option when building a database to
                                  uphold all the referential integrity rules. In
                                  other words for the above example, if you did
                                  tell your database to uphold referential
                                  integrity, and you tried to delete record
                                  number 3 in the Dog Owners table, you would
                                  either not be allowed to do this or you would
                                  be given a warning message before being
                                  allowed to proceed and delete the record. If
                                  you really wanted to delete Mr D Lapidated's
                                  record from the Dog Owners table, you would
                                  normally be required to delete or modify the
                                  two Dog records for Manic and Blip first, so
                                  that no records referred to record number 3 in
                                  the Dog Owners table.
                                </span>
                              </p>
                              <p
                                style="
                              margin-bottom: 10px;
                              line-height: 16.3636360168457px;
                            "
                              >
                                <span style="line-height: 1.5">
                                  <strong>
                                    Data consistency, redundancy and
                                    independence
                                  </strong>
                                  <br />
                                  We have explained these terms fully in the
                                  section on normalisation but we will summarise
                                  their meanings here.&nbsp;
                                </span>
                              </p>
                              <p
                                style="
                              margin-bottom: 10px;
                              line-height: 16.3636360168457px;
                            "
                              >
                                <span style="line-height: 1.5">
                                  Data consistency is ensuring that data is
                                  correct after it has been processed. For
                                  example, if you had to calculate someone's age
                                  from their date of birth, and their age was
                                  calculated incorrectly, then you would say
                                  that the data has become inconsistent. This
                                  may have happened because the data was entered
                                  incorrectly, or calculated incorrectly or for
                                  another reason. If you had to convert a
                                  measurement in one unit into another unit, and
                                  they were in fact incorrect, then the data has
                                  become inconsistent. This could have happened
                                  for the same reasons as the date of birth and
                                  age error.&nbsp;
                                </span>
                              </p>
                              <p
                                style="
                              margin-bottom: 10px;
                              line-height: 16.3636360168457px;
                            "
                              >
                                <span style="line-height: 1.5">
                                  If the same data item appears more than once
                                  in a database, then one of them isn't really
                                  needed because it is already stored in another
                                  table and be got from there when needed. The
                                  extra copies are taking up extra storage space
                                  in a table, can potentially lengthen the time
                                  that it takes to sort and search the database
                                  and can lead to all kinds of other problems.
                                  For example, if you have to delete a data item
                                  with duplicates, you have to remember to
                                  delete all the instances of it in all the
                                  different tables. If you have to modify the
                                  data, again, you have to remember to modify it
                                  wherever it occurs. If you forget, then this
                                  can lead to anomalies in your database and
                                  inconsistencies in the data.&nbsp;
                                </span>
                              </p>
                              <p
                                style="
                              margin-bottom: 10px;
                              line-height: 16.3636360168457px;
                            "
                              >
                                <span style="line-height: 1.5"></span>When a
                                database is set up, its structure is created and
                                the data that is kept in it is defined. Data is
                                then entered into the database. You can add to
                                the data, edit it and delete it. Then you have
                                the applications that actually access the
                                database and make use of the data. An
                                organisation can create an entire database, and
                                then allow others to access the data in it for
                                their own applications. The database of data,
                                and the applications that use the data are in
                                fact completely separate. If you modify the data
                                in the database, it won't affect the programs
                                that access it. This is the whole idea of a
                                Database Management System (DBMS) and we talk
                                about data being completely independent from the
                                applications that use it, or data independence.
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

export default Definitions__terminology_and_keys;
