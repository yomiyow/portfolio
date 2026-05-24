import Image from "next/image";

const ProjectSection = () => {
  return (
    <section id="project" className="flex flex-col items-center min-h-screen gap-10">
      <h2 className="text-4xl font-bold mt-24 mb-5 lg:mb-24">Projects</h2>
      {/* Osas */}
      <div className="flex flex-col xl:flex-row-reverse items-center justify-between gap-12 xl:gap-20 p-4 w-full max-w-7xl mx-auto">
        <div className="mockup-browser border border-base-300 w-full xl:w-1/2 bg-base-200">
          <div className="mockup-browser-toolbar">
            <div className="input">osascomplaints.dev</div>
          </div>
          <div className="grid place-content-center border-t border-base-300 ">
            <figure className="hover-gallery h-auto xl:h-[280px]">
              <Image src="/images/osas-1.png" alt="OSAS System Interface 1" width={2000} height={2000} />
              <Image src="/images/osas-2.png" alt="OSAS System Interface 2" width={2000} height={2000} />
              <Image src="/images/osas-3.png" alt="OSAS System Interface 3" width={2000} height={2000} />
            </figure>
          </div>
        </div>

        <div className="flex flex-col gap-6 w-full xl:w-1/2 px-4 md:px-8">
          <div className="space-y-4">
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
      <div className="flex flex-col xl:flex-row-reverse items-center justify-between gap-12 xl:gap-20 p-4 w-full max-w-7xl mx-auto">
        <div className="mockup-browser border border-base-300 w-full xl:w-1/2 bg-base-200">
          <div className="mockup-browser-toolbar">
          </div>
          <div className="grid place-content-center border-t border-base-300">
            <figure className="hover-gallery h-auto xl:h-[280px]">
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

        <div className="flex flex-col gap-6 w-full xl:w-1/2 px-4 md:px-8">
          <div className="space-y-4">
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
    </section>
  );
};

export default ProjectSection;