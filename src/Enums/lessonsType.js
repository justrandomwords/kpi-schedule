const lessonType = {
  lecture: 'lecture',
  practice: 'practice',
  laboratory: 'laboratory'
}

export function getTypeName(curentLessonType) {
  let typeName
  switch(curentLessonType) {
    case lessonType.lecture:
      typeName = 'Лекція'
      break;
    case lessonType.practice:
      typeName = 'Практика'
      break;
    case lessonType.laboratory:
      typeName = 'Лабораторна'
      break;
  }

  return typeName;
}

export default lessonType;