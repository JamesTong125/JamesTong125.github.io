import { useRef } from "react";
import {gsap} from 'gsap';
import {ScrollTrigger} from 'gsap/ScrollTrigger'
import {useGSAP} from '@gsap/react'




gsap.registerPlugin(ScrollTrigger);

export const ShowcaseSection = () => {

    const sectionRef = useRef(null);
    const project1Ref = useRef(null);
    const project2Ref = useRef(null);
    const project3Ref = useRef(null);

    useGSAP(() =>{
        const projects = [project1Ref.current, project2Ref.current, project3Ref.current];

        projects.forEach((card,index) => {
            gsap.fromTo(
                card,
                {
                    y:50,
                    opacity:0
                },
                {
                    y:0,
                    opacity:1,
                    duration:1,
                    delay:0.3*(index+1),
                    scrollTrigger:{
                        trigger: card,
                        start: "top bottom-=100"
                    }
                }
            )
        })
        
        gsap.fromTo(
            sectionRef.current, 
            {opacity:0}, 
            {opacity:1, duration:1.5}
        )
    }, []);

    return(
        <section id="work" ref={sectionRef} className="app-showcase">
            <div className="w-full">
                <div className="showcaselayout">

                    {/*left */}
                    <div className="first-project-wrapper" ref={project1Ref}>
                        <div className="image-wrapper">
                            <img src="images/GoalJournalApp.png" alt="Goal Journal App"/>
                        </div>

                        <div className="text-content">
                            <h2>Goal Journal App</h2>
                            <p className="text-white-50 md:text-xl">
                                A mobile app designed to help users track their goals and progress over time.
                            </p>
                        </div>
                    </div>

                    {/*right*/}
                    <div className="project-list-wrapper overflow-hidden">
                        <div className="project" ref={project2Ref}>
                            <div className="image-wrapper bg-[#ffefdb]">
                                <img src="images/FlappyGoose.png" alt="CubeStand"/>
                            </div>
                            <h2>Flappy Goose Puzzle and Toy</h2>
                        </div>
                        <div className="project" ref={project3Ref}>
                            <div className="image-wrapper bg-[#ffee7b]">
                                <img src="/images/WIP.jpg" alt="Work in progress"/>
                            </div>
                            <h2>WIP</h2>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    )
}