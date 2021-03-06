import Link from 'next/link'

export default function ProjectCard({ slug, project }) {
  return (
    <div className="mb-6 md:mb-10">
      <div className="relative bg-blue-300 bg-opacity-25 rounded-xl hover:-m-1 hover:p-1">
        <div className="relative bg-white shadow rounded-lg border border-gray-400 hover:border-blue-300 px-6 pt-4">
          <span className="float-right rounded-md border text-sm text-gray-600 leading-4 mt-1 px-4 py-2">Settings</span>
          <Link href="/[license]/projects/[id]" as={`/${project.license}/projects/${project._id}`}>
            <a className="text-gray-700 hover:text-blue-600"><h4 className="text-xl font-bold mb-8">{project.title}</h4></a>
          </Link>
          <div className="">
            <p className="text-sm leading-normal">
              <span className="bg-yellow-s200 inline-block w-20 text-rights text-gray-700 pr-3">Client:</span>
              <span className="text-gray-700 font-semibold">{project.client ? project.client.name : project.clientId}</span>
            </p>
            <p className="text-sm leading-normal">
              <span className="bg-yellow-s200 inline-block w-20 text-rights text-gray-700 pr-3">Contact:</span>
              <span className="text-gray-700 font-semibolds">{project.contact}</span>
            </p>
            <p className="text-sm leading-normal">
              <span className="bg-yellow-s200 inline-block w-20 text-rights text-gray-700 pr-3">Admin:</span>
              <span className="text-gray-700 font-semibolds">{project.admin}</span>
            </p>
            <p className="text-sm leading-normal">
              <span className="bg-yellow-s200 inline-block w-20 text-rights text-gray-700 pr-3">Date:</span>
              <span className="text-gray-700 font-semibolds">{project.startDate}</span>
            </p>
            <p className="text-sm mt-4 -mx-6 px-6 py-4 border-t leading-normal">
              <span className="bg-yellow-s200 inline-block w-20 float-left text-gray-700 pr-3">Modules:</span>
              <span className="text-gray-800 block font-semibolds ml-20">
              {project.modules.length == 0 && <span className="text-red-500">Not defined.</span>}
              {project.modules.map(module => (
                <span className="inline-block leading-loose rounded bg-gray-200 text-xs text-gray-600 mr-1 mb-1 px-2 py-s1">{module.slug}</span>
              ))}
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}