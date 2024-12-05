import React, { useState } from 'react';
import { BackToProfileLink } from '../components/BackToProfileLink';
import { ProjectCard } from '../components/ProjectCard';
import projectsData from '../data/projects.json';
import { PROJECT_CATEGORIES, getCategoryLabel, getCategoryColor } from '../utils/projectUtils';

const categoryIds = [
  PROJECT_CATEGORIES.ALL,
  PROJECT_CATEGORIES.IN_PROGRESS,
  PROJECT_CATEGORIES.COMPLETED,
  PROJECT_CATEGORIES.DIFFICULT,
  PROJECT_CATEGORIES.INCOMPLETE,
] as const;

export function Projects() {
  const [selectedCategory, setSelectedCategory] = useState(PROJECT_CATEGORIES.ALL);

  const filteredProjects = projectsData.projects.filter(project => 
    selectedCategory === PROJECT_CATEGORIES.ALL || project.categoryId === selectedCategory
  );

  return (
    <div className="min-h-screen bg-black text-white">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <BackToProfileLink />

        <h1 className="text-4xl font-bold mt-8 mb-6">Projects</h1>

        {/* Category Filter */}
        <div className="flex flex-wrap gap-2 mb-8">
          {categoryIds.map((categoryId) => (
            <button
              key={categoryId}
              onClick={() => setSelectedCategory(categoryId)}
              className={`px-4 py-2 rounded-full transition-colors duration-300 ${
                selectedCategory === categoryId
                  ? 'bg-white text-black'
                  : 'bg-gray-800 text-white hover:bg-gray-700'
              }`}
            >
              {getCategoryLabel(categoryId)}
            </button>
          ))}
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {filteredProjects.map((project) => (
            <ProjectCard
              key={project.id}
              title={project.title}
              description={project.description}
              imageUrl={project.imageUrl}
              link={project.link}
              categoryId={project.categoryId}
            />
          ))}
        </div>

        <div className="mt-12 text-center">
          <BackToProfileLink />
        </div>
      </div>
    </div>
  );
}