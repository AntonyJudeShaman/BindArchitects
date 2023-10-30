import prisma from '@/lib/prisma';
import { FormType } from 'types';


async function addProjectToDatabase(formData: FormType) {
  try {
    const project = await prisma.project.create({
      data: {
        projectName: formData.projectName,
        description1: formData.description1,
      },
    });
    return project;
  } catch (error) {
    console.error('Error adding project:', error);
    throw error;
  } finally {
    await prisma.$disconnect();
  }
}

export { addProjectToDatabase };
