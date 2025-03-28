# GPS Components

> TOTVS Healthcare Components

## Changelog

## 19.0.1 - (2025-02-04)
* totvs-gps-controls
  * gpsExportDataBackend: Criação de componente para exportação de dados a partir do backend.

## 18.0.4 - (2025-02-04)
* totvs-gps-controls
  * gpsExportDataBackend: Criação de componente para exportação de dados a partir do backend.

## 15.0.29 - (2025-02-04)
* totvs-gps-controls
  * gpsExportDataBackend: Criação de componente para exportação de dados a partir do backend.

## 5.4.26 - (2025-02-04)
* totvs-gps-controls
  * gpsExportDataBackend: Criação de componente para exportação de dados a partir do backend.

## 19.0.0 - (2025-02-03)
Atualização para o Angular 19
* totvs-gps-custom
* totvs-gps-services
* totvs-gps-utils
* totvs-gps-zoom
* totvs-gps-controls
* totvs-gps-crud

## 18.0.0 - (2024-10-09)
Atualização para o Angular 18
* totvs-gps-custom
* totvs-gps-services
* totvs-gps-utils
* totvs-gps-zoom
* totvs-gps-controls
* totvs-gps-crud

## 15.0.28 - (2024-07-04)
* totvs-gps-controls
  * GpsMassUpdate: Tratamento para arquivos para upload com 500 linhas ou mais.
  * GpsMassUpdate: Redução no limite padrão do arquivo para 1mb.

## 5.4.24 - (2024-07-04)
* totvs-gps-controls
  * GpsMassUpdate: Tratamento para arquivos para upload com 500 linhas ou mais.
  * GpsMassUpdate: Redução no limite padrão do arquivo para 1mb.

## 15.0.7 - (2024-03-18)
* TotvsGpsSmartViewService
  * Serviço para geração de relatórios com Smartview utilizando api fornecida pelo framework Datasul  

## 5.0.18 - (2024-03-18)
* TotvsGpsSmartViewService
  * Serviço para geração de relatórios com Smartview utilizando api fornecida pelo framework Datasul  


## Versions

### 0.X / 1.X
Angular 6/7 compatibility

### 2.X
Angular 8 compatibility

### 3.X
Angular 9 compatibility

### 4.X
Angular 10 compatibility

### 5.X
Angular 11 compatibility

### 15.X
Angular 15 compatibility

### 18.X
Angular 18 compatibility

## Breaking changes

### 3.0.0
- gps-page-list: removed p-filter property

### 5.4.4
- gps-mass-update: created component

### 15.0.1
- Angular version: updated to version 15

### 18.0.0
- Angular version: updated to version 18

## TotvsGpsServices

### Features
- Get/Post/Put/Delete service factory
- Http Interceptor for Datasul-REST
- GenericZoom
- Cache Service
- From version 15.0.5 it is possible to send HTTPClient.options to the get, post, put and delete methods.

### Build
- Change the version number in projects/totvs-gps-services/package.json.
- Run `npm run build_services` to build the project. The build artifacts will be stored in the `dist/totvs-gps-services` directory.
- Run `npm publish ./dist/totvs-gps-services/totvs-gps-services-X.Y.Z.tgz` to publish the pachage.


## TotvsGpsControls

### Features
- Form validator
- GPS components

### Build
- Change the version number in projects/totvs-gps-controls/package.json.
- Run `npm run build_controls` to build the project. The build artifacts will be stored in the `dist/totvs-gps-controls` directory.
- Run `npm publish ./dist/totvs-gps-controls/totvs-gps-controls-X.Y.Z.tgz` to publish the pachage.


## TotvsGpsUtils

### Features
- TotvsGpsDateUtils to manipulate Date objects
- TotvsGpsJsonUtils to manipulate JSON objects
- TotvsStringUtils
- TotvsMaskString
- GpsMaintenanceUrl to manipulate and generate url's used on CRUD

### Build
- Change the version number in projects/totvs-gps-utils/package.json.
- Run `npm run build_utils` to build the project. The build artifacts will be stored in the `dist/totvs-gps-utils` directory.
- Run `npm publish ./dist/totvs-gps-utils/totvs-gps-utils-X.Y.Z.tgz` to publish the pachage.

## TotvsGpsCRUD

### Features
- GPSPageFilter - controller for page filter (size,page,disclairmer) and other properties sended on GET request e.g. fiels, expands, query
- GPSPageNavigation - Controller used to navigate through page routes
- GpsCRUDListModel - Model used on CRUD list page
- GpsCRUDMaintenancePage - Controller that is responsible to store active route and to instanciate object on CRUD Edit\Detail Pages.

### Build
- Change the version number in projects/totvs-gps-crud/package.json.
- Run `npm run build_crud` to build the project. The build artifacts will be stored in the `dist/totvs-gps-crud` directory.
- Run `npm publish ./dist/totvs-gps-crud/totvs-gps-crud-X.Y.Z.tgz` to publish the pachage.
