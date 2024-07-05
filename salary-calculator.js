function calculateNetSalary(basicPay, benefits) {
  // Calculate total income (gross salary)
  const totalIncome = basicPay + benefits;
  console.log("Your total income (gross salary) is: ", totalIncome);

  function calculateSalaryMinusNssf() {
    let salaryMinusNssf;

    if (totalIncome > 40000) {
      salaryMinusNssf = totalIncome - 15000; // Nssf deduction
    } else if (totalIncome > 30000) {
      salaryMinusNssf = totalIncome - 3000; // Nssf deduction
    } else if (totalIncome > 20000) {
      salaryMinusNssf = totalIncome - 2000; // Nssf deduction
    } else if (totalIncome > 10000) {
      salaryMinusNssf = totalIncome - 1000; // Nssf deduction
    } else {
      salaryMinusNssf = totalIncome; // No Nssf deduction for low income
    }

    console.log("Your salary minus NSSF is: ", salaryMinusNssf);

    function calculateSalaryMinusNhif() {
      let salaryMinusNhif;

      if (salaryMinusNssf > 40000) {
        salaryMinusNhif = salaryMinusNssf - 15000; // NHIF deduction
      } else if (salaryMinusNssf > 30000) {
        salaryMinusNhif = salaryMinusNssf - 3000; // NHIF deduction
      } else if (salaryMinusNssf > 20000) {
        salaryMinusNhif = salaryMinusNssf - 2000; // NHIF deduction
      } else if (salaryMinusNssf > 10000) {
        salaryMinusNhif = salaryMinusNssf - 1000; // NHIF deduction
      } else {
        salaryMinusNhif = salaryMinusNssf; // No NHIF deduction for low income
      }

      console.log("Your salary minus NHIF is: ", salaryMinusNhif);

      function calculateNetSalary() {
        let netSalary;

        
        const taxRate = 0.25;
        const taxableIncome = salaryMinusNhif; // Assuming benefits are not taxable

        netSalary = taxableIncome * (1 - taxRate); // Calculate net salary using tax rate

        console.log("Your net salary is: ", netSalary);
        return netSalary; // return the net salary for further use
      }

      const calculatedNetSalary = calculateNetSalary();
    }

    calculateSalaryMinusNhif();
  }

  calculateSalaryMinusNssf();
}

calculateNetSalary(74000, 1000);
