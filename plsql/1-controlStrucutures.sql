--Scenario 1
DECLARE
   CURSOR cust_cursor IS
      SELECT c.customer_id, c.age
      FROM Customers c;

BEGIN
   FOR cust IN cust_cursor LOOP

      IF cust.age > 60 THEN

         UPDATE Loans
         SET interest_rate = interest_rate - 1
         WHERE customer_id = cust.customer_id;

      END IF;

   END LOOP;

   COMMIT;

   DBMS_OUTPUT.PUT_LINE('Interest rates updated successfully.');

END;
/
--Scenario 2
DECLARE
   CURSOR cust_cursor IS
      SELECT customer_id, balance
      FROM Customers;

BEGIN

   FOR cust IN cust_cursor LOOP

      IF cust.balance > 10000 THEN

         UPDATE Customers
         SET isVIP = 'TRUE'
         WHERE customer_id = cust.customer_id;

      END IF;

   END LOOP;

   COMMIT;

   DBMS_OUTPUT.PUT_LINE('VIP customers updated.');

END;
/

--Scenario 3
DECLARE

   CURSOR loan_cursor IS
      SELECT c.customer_name,
             l.loan_id,
             l.due_date
      FROM Customers c
      JOIN Loans l
      ON c.customer_id = l.customer_id
      WHERE l.due_date BETWEEN SYSDATE
                           AND SYSDATE + 30;

BEGIN

   FOR loan_rec IN loan_cursor LOOP

      DBMS_OUTPUT.PUT_LINE(
         'Reminder: Loan '
         || loan_rec.loan_id
         || ' for customer '
         || loan_rec.customer_name
         || ' is due on '
         || loan_rec.due_date
      );

   END LOOP;

END;
/