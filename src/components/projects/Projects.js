import notifiVRImage from '../../media/home/vr.jpg';
import macyImage from '../../media/home/clock.jpg';
import alienImage from '../../media/home/alien.jpg';
import tachiImage from '../../media/home/tachi.jpg';

class Projects {

  projects = [
    {
      name: "NotifiVR",
      description: "Notifications designed to inform you about the real world when you’re inside a virtual reality environment.",
      image: notifiVRImage,
      link: "/notifivr",
      alt: "Person picking up a VR telephone to answer a real life call",
      color: "blue"
    },
    {
      name: "Tachiyomi",
      description: "The most popular open-source app for reading manga on Android..",
      image: tachiImage,
      link: "/tachiyomi",
      alt: "Sitting on a couch with an app with several manga covers",
      color: "blue"
    },
    {
      name: "Alien Encounter",
      description: "Exploring the role of diegetic gestural communication in  virtual reality experiences.",
      image: alienImage,
      link: "/alien",
      alt: "Blue digital hand waving hello to purple alien",
      color: "purple"
    },
    {
      name: "Macy’s of the Future",
      description: "Service design project with Macy's to envision their in-store customer experience 5 years from now.",
      image: macyImage,
      link: "/macys",
      alt: "Macy's flagship store",
      color: "red"
    },
  ];

  getIndexOfProject = (project) => {
    return this.projects.findIndex(x => x.name === project);
  };

  getNextProject = (project) => {

    let index = this.getIndexOfProject(project);

    if (index + 1 > this.projects.length - 1) {
      return this.projects[0]
    }

    return this.projects[index + 1];
  };

  getPrevProject = (project) => {

    let index = this.getIndexOfProject(project);

    if (index - 1 < 0) {
      return this.projects[this.projects.length - 1]
    }

    return this.projects[index - 1];
  };

  getRandomProject = () => {
    let random = Math.floor(Math.random() * this.projects.length)
    return this.projects[random];
  }

  getProjectsMinusCurrent = (project) => {

    let modProjects = this.projects.slice();
    let index = this.getIndexOfProject(project);
    if (index > -1)
      modProjects.splice(index, 1);

    return modProjects;
  };

}

export default Projects;