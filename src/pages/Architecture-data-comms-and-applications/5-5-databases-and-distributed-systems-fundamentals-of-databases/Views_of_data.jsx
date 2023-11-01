import React from "react";

function Views_of_data() {
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
                              <h1 style="text-align: center">Views of data</h1>
                              <p>
                                <strong>Introduction</strong>
                                <br />
                                Organisations generally don't set-up one
                                database for each area of its business. They
                                wouldn't have one database for Personnel, one
                                for Finance, one for Marketing and so on. They
                                set up just one big database, organised into
                                tables that are related to each other and when
                                it
                                <span style="line-height: 16.3636360168457px">
                                  has been set-up, it can contain a huge amount
                                  of data covering a wide range of areas.&nbsp;
                                </span>
                              </p>

                              <p>
                                <img
                                  style="margin: 10px; float: right"
                                  src="images/2bbb7705-bf23-4d48-9660-08a3c9615614binocs.jpg"
                                  alt="binocs"
                                />
                                The Network Administrator (the person in charge
                                of running and maintaining the database) will
                                then set about allocating 'rights' to users. The
                                first thing they will do is to set up each
                                authorised user with a login and password. An
                                authorised user is simply a person who has got
                                the right to access the database.
                              </p>
                              <p>
                                The next job will be to define what parts of the
                                database each user will be able to access and
                                what they can actually do with the data they can
                                see. You don't want a company's nurse accessing
                                sensitive financial information on a database
                                just as you don't want the company's accountant
                                having access to everyone's health records! You
                                don't want a junior member of the sales team
                                having access to all of the sales information in
                                a company but clearly, the Sales Department
                                Manager certainly does need to have access to
                                all of the data.
                              </p>
                              <p>
                                If someone has access to data, which has no
                                relevance to them carrying out their job, then
                                that poses a significant security risk. Data is
                                very valuable and can be sold. They might also
                                accidently delete or amend data bacause they are
                                not trained in what to do! In addition, if data
                                is of a personal nature, perhaps medical or
                                financial records, for example, the company has
                                a legal obligation to keep the data private and
                                let only those people in the company who have a
                                need to access the data as part of their job see
                                it.
                              </p>
                              <p>
                                Each authorised user can see only those parts of
                                the database that the Network Adminstrator has
                                given them the right to access. In addition, the
                                Network Administrator will have set-up what they
                                can do with the data they can see. Sometimes,
                                they can only see data. Other times, they may be
                                given the right to delete data, or add a new
                                record, or amend an existing record and so on.
                              </p>
                              <p>
                                We say that each person has a 'view' of the
                                database and setting up views for different
                                users is an important part of setting up a
                                database.&nbsp;&nbsp;
                              </p>
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

export default Views_of_data;
