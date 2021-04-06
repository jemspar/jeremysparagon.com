import { Component, OnInit } from '@angular/core';
import { Project } from '../project';
import { projects } from '../projects';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.scss']
})
export class ProjectComponent implements OnInit {

  projects: Project[] = projects;

  constructor() { }

  ngOnInit() {

  }

}
