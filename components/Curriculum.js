var jobs = [
    {
        id: 1,
        title: 'Specialist Software Engineer',
        company: 'Virtus / HP Inc.',
        desc: 'Work as specialist software engineer and tech leader, responsibilities:\n-Make decisions about architecture, use of APIs and algorithms;\n-Leading development team and review team code;\n-Develop and suggest new features for the system;\n-Maintenance of the infrastructure on AWS;\n-Manage the CI and CD tasks on Jenkins/Gitlab CI ',
        site: 'https://www.virtus.ufcg.edu.br',
        begin: '2016-04-01T23:20:46+00:00',
        end: ''
      },
      {
        id: 2,
        title: 'Software Engineer (Part-time)',
        company: 'ShowKase',
        desc: 'Work as software engineer(remote and part time), responsibilities:\n-Make decisions about architecture, use of APIs and algorithms;\n-Develop and suggest new features for the system;\n',
        site: 'https://www.showkase.com.br',
        begin: '2019-04-01T23:20:46+00:00',
        end: ''
      },
      {
        id: 3,
        title: 'Full Stack Developer (Part-time)',
        company: 'ShowKase',
        desc: 'Worked as full stack developer (remote and part time), responsible for development of RESTFul web applications of company.',
        site: 'https://mcontigo.com',
        begin: '2016-06-01T23:20:46+00:00',
        end: '2017-05-01T23:20:46+00:00'
      },
      {
        id: 4,
        title: 'Software Developer',
        company: 'Embedded System Lab - UFCG',
        desc: 'Worked as mobile developer (Android), producing applications for ASUS Brazil',
        site: 'http://www.embeddedlab.org',
        begin: '2015-04-01T23:20:46+00:00',
        end: '2016-03-31T23:20:46+00:00'
      },
      {
        id: 5,
        title: 'Software Developer and Researcher',
        company: 'Lavid',
        desc: 'Was part of the VLibras project (http://www.vlibras.gov.br/), developed by UFPB in partnership with RNP. Worked mostly with JavaScript, Angular JS, HTML5, CSS3 and Bootstrap.',
        site: 'http://lavid.ufpb.br',
        begin: '2014-10-01T23:20:46+00:00',
        end: '2015-03-31T23:20:46+00:00'
      },
      {
        id: 6,
        title: 'Tutor',
        company: 'UFPB Virtual',
        desc: 'Was tutor at UFPB-Virtual, participating in the project ProTic(Training for Public Employees in Process Improvement and Management through the use of ICTs)',
        site: 'http://www.ufpb.br',
        begin: '2014-04-01T23:20:46+00:00',
        end: '2015-09-31T23:20:46+00:00'
      }
]

var formation = [
    {
        id: 1,
        title: 'Postgraduate in Distributed Software Architecture',
        institution: 'PUC Minas - Pontifícia Universidade Católica de Minas Gerais',
        begin: '2021-04-01T23:20:46+00:00',
        end: '2022-05-01T23:20:46+00:00'
      },
      {
        id: 2,
        title: 'Bachelor in Information Systems',
        institution: 'UFPB - Federal University of Paraiba',
        begin: '2011-08-11T23:20:46+00:00',
        end: '2015-09-01T23:20:46+00:00'
      }
]

export default function Curriculum() {
    return (
        <section className="success" id="curriculum">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12 text-center">
                        <h2>CURRICULUM</h2>
                        <hr className="item-divider item-divider-light item-divider-star"></hr>
                    </div>
                </div>
               

                <div className="row job-item"  >
                    {
                        jobs.map((job, index) => {
                            return (
                                (index == 0 ? 
                                    <div key={index}>
                                        <div className="col-lg-3">
                                            <h3 className="headline-inline curriculum-title">
                                                <i className="fa fa-briefcase"></i> 
                                                WORK
                                            </h3>
                                        </div>  
                                        <div className='col-lg-6'>
                                            <h3>{job.title}</h3>
                                            <div className="job-sub-item">
                                                <i className="fa fa-building-o"></i>
                                                    {job.company}
                                            </div>
                                            <div className="job-sub-item">
                                                <i className="fa fa-globe"></i>
                                                <a href="{job.site}" target="_blank">{job.site}</a>
                                            </div>
                                            <p className="job-sub-item">{job.desc}</p>
                                            <hr></hr>
                                            <div className="col-lg-3 hidden"></div>
                                        </div>
                                    </div>                                                         
                                : 
                                    <div key={index} className="col-lg-6 col-lg-offset-3">
                                        <h3>{job.title}</h3>
                                        <div className="job-sub-item">
                                            <i className="fa fa-building-o"></i>
                                                {job.company}
                                        </div>
                                        <div className="job-sub-item">
                                            <i className="fa fa-globe"></i>
                                            <a href="{job.site}" target="_blank">{job.site}</a>
                                        </div>
                                        <p className="job-sub-item">{job.desc}</p>
                                        <hr></hr>
                                        <div className="col-lg-3 hidden"></div>
                                    </div>
                                )
                        
                            );
                        })
                    }
                </div>  


                <div className="row education-item"  >
                    {
                        formation.map((education, index) => {
                            return (
                                (index == 0 ? 
                                    <div key={index}>
                                        <div className="col-lg-3">
                                            <h3 className="headline-inline curriculum-title">
                                                <i className="fa fa-briefcase"></i> 
                                                EDUCATION
                                            </h3>
                                        </div>  
                                        <div className='col-lg-6'>
                                            <h3>{education.title}</h3>
                                            <div className="education-sub-item">
                                                <i className="fa fa-building-o"></i>
                                                    {education.institution}
                                            </div>
                                            <hr></hr>
                                            <div className="col-lg-3 hidden"></div>
                                        </div>
                                    </div>                                                         
                                : 
                                    <div key={index} className="col-lg-6 col-lg-offset-3">
                                        <h3>{education.title}</h3>
                                        <div className="education-sub-item">
                                            <i className="fa fa-building-o"></i>
                                                {education.institution}
                                        </div>
                                        <hr></hr>
                                        <div className="col-lg-3 hidden"></div>
                                    </div>
                                )
                        
                            );
                        })
                    }
                </div>  

            </div> 
        </section>
    )
}