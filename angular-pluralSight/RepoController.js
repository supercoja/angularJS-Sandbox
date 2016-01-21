<div>
    <h4>{{repo.name}} </h4> 
       {{error}}
       <img ng-src="{{repo.avatar_url}}" title="{{repo.avatar_url}} {{repo.name}}">
       Order:
       <select ng-model="repoSortOrder">
           <option value="+name">Name </option>
           <option value="-stargazers_count">Stars  </option>
           <option value="+language">Language  </option>                      
       </select>
       </div>     
       <table>
           <thead>
               <tr>
                   <th> Name </th>
                   <th> Stars </th>
                   <th> Language </th>
               </tr>
           </thead>
           <tbody>
               <tr ng-repeat="repo in repos | orderBy:repoSortOrder">
                   <td>
                       <a href="#repo/{{user.login}}/{{repo.name}}">
                       {{repo.name}} </a></td>
                   <td>{{repo.stargazers_count | number}}</td>
                   <td>{{repo.language}}</td>                                      
               </tr>
           </tbody>
        </table>
<a href="#/main">Back To Search</a>