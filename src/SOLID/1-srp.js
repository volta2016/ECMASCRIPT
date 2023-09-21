function calculateSalary() {
  const salary = employee.hourWorked * employee.payPerHour;

  const report = `
    Name: ${employee.name}
    Hours worked: ${employee.hourWorked}
    Pay per Hour: ${employee.payPerHour}
    total salary: ${salary}
  `;

  console.log(report);

  return salary;
}

// refactor
//single responsibility
function calculateSalary(employee) {
  return employee.hourWorked * employee.payPerHour;
}

//single responsibility
function generateReport(employee, salary) {
  const report = `
    Name: ${employee.name}
    Hours worked: ${employee.hourWorked}
    Pay per Hour: ${employee.payPerHour}
    total salary: ${salary}
  `;
  console.log(report);
}

const salary = calculateSalary(employee);
generateReport(employee, salary);
