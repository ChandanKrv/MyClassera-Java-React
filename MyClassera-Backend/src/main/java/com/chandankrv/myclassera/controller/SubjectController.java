package com.chandankrv.myclassera.controller;

import com.chandankrv.myclassera.model.Student;
import com.chandankrv.myclassera.model.Subject;
import com.chandankrv.myclassera.service.StudentService;
import com.chandankrv.myclassera.service.SubjectService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Set;

/**
 * Created by Chandan on 05 August, 2024.
 * --------------------------------------
 * Controller for managing subject-related operations
 */

/*
Endpoints for Subjects:

1. Get All Subjects
   GET: http://localhost:8080/api/subject/all

2. Get a Subject by ID
   GET: http://localhost:8080/api/subject/{id}
   Example: http://localhost:8080/api/subject/1

3. Add a Subject
   POST: http://localhost:8080/api/subject/add
   Pass JSON data in the request body:
   {
       "name": "Mathematics",
       "description": "Basic Mathematics course"
   }

4. Add Multiple Subjects
   POST: http://localhost:8080/api/subject/addMultiple
   Pass an array of subjects in the request body:
   [
       {
           "name": "Physics",
           "description": "Basic Physics course"
       },
       {
           "name": "Chemistry",
           "description": "Basic Chemistry course"
       }
   ]

5. Update a Subject
   PUT: http://localhost:8080/api/subject/update
   Pass JSON data in the request body:
   {
       "id": 2,
       "name": "Advanced Mathematics",
       "description": "Advanced Mathematics course"
   }

6. Delete a Subject
   DELETE: http://localhost:8080/api/subject/delete/{id}
   Example: http://localhost:8080/api/subject/delete/1
   (1 is the Subject ID)

7. Get Students by Subject ID
   GET: http://localhost:8080/api/subject/{id}/students
   Example: http://localhost:8080/api/subject/1/students
 */

@RestController
@RequestMapping("/api/subject")
public class SubjectController {

    @Autowired
    private SubjectService subjectService;

    @Autowired
    private StudentService studentService;


    @GetMapping("/all")
    public ResponseEntity<List<Subject>> getSubjects() {
        List<Subject> subjects = subjectService.getSubjects();
        return ResponseEntity.ok(subjects);
    }

    @GetMapping("/{id}")
    public ResponseEntity<Subject> getSubjectById(@PathVariable int id) {
        Subject subject = subjectService.getSubjectById(id);
        if (subject != null) {
            return ResponseEntity.ok(subject);
        } else {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body(null);
        }
    }

    @PostMapping("/add")
    public ResponseEntity<Subject> addSubject(@RequestBody Subject subject) {
        Subject newSubject = subjectService.addSubject(subject);
        return ResponseEntity.status(HttpStatus.CREATED).body(newSubject);
    }

    @PostMapping("/addMultiple")
    public ResponseEntity<List<Subject>> addSubjects(@RequestBody List<Subject> subjects) {
        List<Subject> newSubjects = subjectService.addSubjects(subjects);
        return ResponseEntity.status(HttpStatus.CREATED).body(newSubjects);
    }

    @PutMapping("/update")
    public ResponseEntity<Subject> updateSubject(@RequestBody Subject subject) {
        Subject updatedSubject = subjectService.updateSubject(subject);
        return ResponseEntity.ok(updatedSubject);
    }

    @DeleteMapping("/delete/{id}")
    public ResponseEntity<String> deleteSubject(@PathVariable int id) {
        subjectService.deleteSubjectById(id);
        return ResponseEntity.ok("Subject deleted successfully with ID: " + id);
    }

    @GetMapping("/{id}/students")
    public ResponseEntity<Set<Student>> getStudentsBySubjectId(@PathVariable int id) {
        Set<Student> students = subjectService.getStudentsBySubjectId(id);
        return ResponseEntity.ok(students);
    }
}
