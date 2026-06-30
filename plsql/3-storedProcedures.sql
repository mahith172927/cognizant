-- Scenario: 1
CREATE OR REPLACE PROCEDURE ProcessMonthlyInterest
IS
BEGIN

   UPDATE Accounts
   SET balance = balance * 1.01
   WHERE account_type = 'SAVINGS';

   COMMIT;

   DBMS_OUTPUT.PUT_LINE(
      'Monthly interest processed successfully.'
   );

END;
/

-- Scenario: 2
CREATE OR REPLACE PROCEDURE UpdateEmployeeBonus(
   p_department_id NUMBER,
   p_bonus_percent NUMBER
)
IS
BEGIN

   UPDATE Employees
   SET salary = salary +
                (salary * p_bonus_percent / 100)
   WHERE department_id = p_department_id;

   COMMIT;

   DBMS_OUTPUT.PUT_LINE(
      'Employee bonus updated.'
   );

END;
/

-- Scenario: 3
CREATE OR REPLACE PROCEDURE TransferFunds(
   p_from_account NUMBER,
   p_to_account NUMBER,
   p_amount NUMBER
)
IS

   v_balance NUMBER;

BEGIN

   SELECT balance
   INTO v_balance
   FROM Accounts
   WHERE account_id = p_from_account;

   IF v_balance >= p_amount THEN

      UPDATE Accounts
      SET balance = balance - p_amount
      WHERE account_id = p_from_account;

      UPDATE Accounts
      SET balance = balance + p_amount
      WHERE account_id = p_to_account;

      COMMIT;

      DBMS_OUTPUT.PUT_LINE(
         'Transfer Successful.'
      );

   ELSE

      DBMS_OUTPUT.PUT_LINE(
         'Insufficient Balance.'
      );

   END IF;

END;
/