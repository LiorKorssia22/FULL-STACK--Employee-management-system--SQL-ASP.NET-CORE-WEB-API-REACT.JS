/****** Script for SelectTopNRows command from SSMS  ******/
SELECT TOP (1000) [EmployeeId]
      ,[EmployeeName]
      ,[Department]
      ,[DateOfJoining]
      ,[PhotoFileName]
  FROM [mstest].[dbo].[Employee]