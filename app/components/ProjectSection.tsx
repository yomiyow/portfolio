import Image from "next/image";
import { capitalize, SECTION_IDS } from "../constants";

const ProjectSection = () => {
  return (
    <section id={SECTION_IDS.PROJECTS} className="flex flex-col items-center">
      <h2 className="text-4xl font-bold mt-24 mb-5 lg:mb-10">{capitalize(SECTION_IDS.PROJECTS)}</h2>
      {/* Osas */}
      <div className="flex flex-col items-center justify-between gap-4 p-4 w-full max-w-6xl mx-auto">
        <div className="mockup-browser border border-base-300 w-full">
          <div className="mockup-browser-toolbar">
            <div className="input">osascomplaints.dev</div>
          </div>
          <div className="grid place-content-center border-t border-base-300 xl:h-[540px]">
            <figure className="hover-gallery">
              <Image src="/images/osas-1.png" alt="OSAS System Interface 1" width={2000} height={2000} />
              <Image src="/images/osas-2.png" alt="OSAS System Interface 2" width={2000} height={2000} />
              <Image src="/images/osas-3.png" alt="OSAS System Interface 3" width={2000} height={2000} />
            </figure>
          </div>
        </div>

        <div className="flex flex-col gap-6 w-full">
          <div>
            <p className="text-left leading-8">
              A complaint management system for the school Office of Student Affairs that allows students to submit complaints online while enabling administrators to manage, track, and update complaint statuses.

              <input type="checkbox" id="read-more-toggle-1" className="peer hidden" />

              <span className="peer-checked:hidden">
                ...{" "}
                <label htmlFor="read-more-toggle-1" className="text-primary hover:underline cursor-pointer">
                  See more
                </label>
              </span>

              <span className="hidden peer-checked:inline">
                {" "}The system also sends automated status update notifications to students through their school email accounts.{" "}
                <label htmlFor="read-more-toggle-1" className="text-primary hover:underline font-medium cursor-pointer">
                  See less
                </label>
              </span>
            </p>
          </div>

          <div className="flex flex-wrap gap-2">
            <span className="badge badge-sm badge-primary badge-soft">React</span>
            <span className="badge badge-sm badge-primary badge-soft">TypeScript</span>
            <span className="badge badge-sm badge-primary badge-soft">Tailwind CSS</span>
            <span className="badge badge-sm badge-primary badge-soft">DaisyUI</span>
            <span className="badge badge-sm badge-primary badge-soft">Tanstack Query</span>
            <span className="badge badge-sm badge-primary badge-soft">Tanstack Table</span>
            <span className="badge badge-sm badge-primary badge-soft">React Hook Form</span>
            <span className="badge badge-sm badge-primary badge-soft">Zustand</span>
            <span className="badge badge-sm badge-primary badge-soft">Supabase</span>
            <span className="badge badge-sm badge-primary badge-soft">Resend</span>
          </div>

          <div className="flex flex-wrap gap-4">
            <a href="https://osascomplaints.dev" rel="noopener noreferrer" target="_blank" className="btn btn-neutral btn-sm">
              View Live Project
            </a>
          </div>
        </div>
      </div>
      {/* Kubernetes */}
      <div className="flex flex-col items-center justify-between gap-4 p-4 w-full max-w-6xl mx-auto">
        <div className="mockup-window border border-base-300 w-full">
          <div className="grid place-content-center border-t border-base-300 xl:h-[540px]">
            <figure className="hover-gallery">
              <Image src="/images/kubernetes/online-boutique-home.png" alt="Online Boutique Home Page" width={2000} height={2000} />
              <Image src="/images/kubernetes/online-boutique-cart.png" alt="Online Boutique Cart Page" width={2000} height={2000} />
              <Image src="/images/kubernetes/microservices-demo-github.png" alt="Microservices Demo GitHub" width={2000} height={2000} />
              <Image src="/images/kubernetes/kubernetes-cluster-1.png" alt="Kubernetes Cluster 1" width={2000} height={2000} />
              <Image src="/images/kubernetes/kubernetes-cluster-2.png" alt="Kubernetes Cluster 2" width={2000} height={2000} />
              <Image src="/images/kubernetes/grafana-kubernetes-pods.png" alt="Grafana Pods" width={2000} height={2000} />
              <Image src="/images/kubernetes/grafana-kubernetes-dashboard-1.png" alt="Grafana Dashboard 1" width={2000} height={2000} />
              <Image src="/images/kubernetes/grafana-kubernetes-dashboard-2.png" alt="Grafana Dashboard 2" width={2000} height={2000} />
              <Image src="/images/kubernetes/grafana-kubernetes-dashboard-3.png" alt="Grafana Dashboard 3" width={2000} height={2000} />
              <Image src="/images/kubernetes/grafana-kubernetes-dashboard-4.png" alt="Grafana Dashboard 4" width={2000} height={2000} />
            </figure>
          </div>
        </div>

        <div className="flex flex-col gap-6 w-full">
          <div>
            <p className="text-left leading-8">
              Deployed Google’s Online Boutique microservices application on a local kubernetes cluster using Docker Desktop, kubectl, and Helm, with Prometheus and Grafana for monitoring and metrics visualization.
            </p>
          </div>

          <div className="flex flex-wrap gap-2">
            <span className="badge badge-sm badge-primary badge-soft">Kubernetes</span>
            <span className="badge badge-sm badge-primary badge-soft">kind</span>
            <span className="badge badge-sm badge-primary badge-soft">kubectl</span>
            <span className="badge badge-sm badge-primary badge-soft">helm</span>
            <span className="badge badge-sm badge-primary badge-soft">Prometheus</span>
            <span className="badge badge-sm badge-primary badge-soft">Grafana</span>
            <span className="badge badge-sm badge-primary badge-soft">Docker Desktop</span>
          </div>

          <div className="flex flex-wrap gap-4">
            <a href="https://github.com/GoogleCloudPlatform/microservices-demo" rel="noopener noreferrer" target="_blank" className="btn btn-neutral btn-sm">
              View Repository
            </a>
          </div>
        </div>
      </div>

      {/* Github Starred Projects*/}
      <ul className="list bg-base-100 rounded-box max-w-6xl w-full">

        <li className="p-4 pb-2 text-xs opacity-60 tracking-wide">Other Projects (Academic Projects)</li>

        <li className="list-row">
          <div>
            <svg className="size-10 rounded-box" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.166 6.839 9.489.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.604-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.464-1.11-1.464-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.831.092-.646.35-1.086.636-1.336-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.564 9.564 0 0112 6.844c.85.004 1.705.114 2.504.336 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.138 20.161 22 16.416 22 12c0-5.523-4.477-10-10-10z"></path></svg>
          </div>
          <div>
            <div>Recipe App</div>
            <div className="text-xs uppercase font-semibold opacity-60">Mobile Application</div>
          </div>
          <p className="list-col-wrap flex flex-wrap gap-2">
            <span className="badge badge-sm badge-primary badge-soft">Java</span>
            <span className="badge badge-sm badge-primary badge-soft">Firebase</span>
          </p>
          <a href="https://github.com/yomiyow/recipe-app#-demo" target="_blank" rel="noopener noreferrer" className="btn btn-square btn-ghost" title="View Repository">
            <svg className="size-[1.2em]" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
            </svg>
          </a>
        </li>

        <li className="list-row">
          <div>
            <svg className="size-10 rounded-box" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.166 6.839 9.489.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.604-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.464-1.11-1.464-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.831.092-.646.35-1.086.636-1.336-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.564 9.564 0 0112 6.844c.85.004 1.705.114 2.504.336 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.138 20.161 22 16.416 22 12c0-5.523-4.477-10-10-10z"></path></svg>
          </div>
          <div>
            <div>Flashcard App</div>
            <div className="text-xs uppercase font-semibold opacity-60">Mobile Application</div>
          </div>
          <p className="list-col-wrap flex flex-wrap gap-2">
            <span className="badge badge-sm badge-primary badge-soft">Java</span>
            <span className="badge badge-sm badge-primary badge-soft">SQLite</span>
          </p>
          <a href="https://github.com/yomiyow/flashcard-app#-demo" target="_blank" rel="noopener noreferrer" className="btn btn-square btn-ghost" title="View Repository">
            <svg className="size-[1.2em]" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
            </svg>
          </a>
        </li>

        <li className="list-row">
          <div>
            <svg className="size-10 rounded-box" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.166 6.839 9.489.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.604-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.464-1.11-1.464-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.831.092-.646.35-1.086.636-1.336-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.564 9.564 0 0112 6.844c.85.004 1.705.114 2.504.336 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.138 20.161 22 16.416 22 12c0-5.523-4.477-10-10-10z"></path></svg>
          </div>
          <div>
            <div>Citizen Complaint Management System</div>
            <div className="text-xs uppercase font-semibold opacity-60">Desktop Application</div>
          </div>
          <p className="list-col-wrap flex flex-wrap gap-2">
            <span className="badge badge-sm badge-primary badge-soft">Java</span>
            <span className="badge badge-sm badge-primary badge-soft">Java Swing</span>
            <span className="badge badge-sm badge-primary badge-soft">JDBC</span>
            <span className="badge badge-sm badge-primary badge-soft">MS SQL Server</span>
            <span className="badge badge-sm badge-primary badge-soft">Flatlaf</span>
          </p>
          <a href="https://github.com/yomiyow/citizen-complaint-management-system#citizen-complaint-management-system-ccms" target="_blank" rel="noopener noreferrer" className="btn btn-square btn-ghost" title="View Repository">
            <svg className="size-[1.2em]" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
            </svg>
          </a>
        </li>

        <li className="list-row">
          <div>
            <svg className="size-10 rounded-box" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.166 6.839 9.489.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.604-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.464-1.11-1.464-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.831.092-.646.35-1.086.636-1.336-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.564 9.564 0 0112 6.844c.85.004 1.705.114 2.504.336 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.138 20.161 22 16.416 22 12c0-5.523-4.477-10-10-10z"></path></svg>
          </div>
          <div>
            <div>Library Management System</div>
            <div className="text-xs uppercase font-semibold opacity-60">Desktop Application</div>
          </div>
          <p className="list-col-wrap flex flex-wrap gap-2">
            <span className="badge badge-sm badge-primary badge-soft">Java</span>
            <span className="badge badge-sm badge-primary badge-soft">Java Swing</span>
            <span className="badge badge-sm badge-primary badge-soft">JDBC</span>
            <span className="badge badge-sm badge-primary badge-soft">MySQL</span>
            <span className="badge badge-sm badge-primary badge-soft">Flatlaf</span>
          </p>
          <a href="https://github.com/yomiyow/library-management-system#-library-management-system" target="_blank" rel="noopener noreferrer" className="btn btn-square btn-ghost" title="View Repository">
            <svg className="size-[1.2em]" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
            </svg>
          </a>
        </li>
      </ul>
    </section>
  );
};

export default ProjectSection;