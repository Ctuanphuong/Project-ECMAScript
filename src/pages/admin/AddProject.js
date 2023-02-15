import Header from "@/components/admin/Header";
import Footer from "@/components/admin/Footer";
const AddProject = () => {
  return `${Header()}
  <!-- WRAP ARTICLE -->
      <article class="tw-pb-10">
        <div class="welcome container tw-my-10 tw-text-center">
          <h1 class="tw-text-4xl tw-text-[#333] tw-font-bold">
            Project Administrator Page
          </h1>
        </div>
        <div class="container">
          <div class="tw-my-4">
            <h3 class="tw-text-[#fdb63c] tw-font-bold tw-text-xl">
              <i class="fa-solid fa-square-plus tw-mr-1"></i> Add Project
            </h3>
          </div>
          <form>
            <div class="form-group">
              <label
                for="exampleFormControlInput1"
                class="tw-block tw-mb-1 tw-mt-2 tw-font-medium"
                >Project's Name</label
              >
              <input
                type="text"
                class="form-control"
                id="exampleFormControlInput1"
                placeholder="Enter Project's name..."
              />
            </div>
            <div class="form-group">
              <label
                for="exampleFormControlInput1"
                class="tw-block tw-mb-1 tw-mt-2 tw-font-medium"
                >Project's Link</label
              >
              <input
                type="text"
                class="form-control"
                id="exampleFormControlInput1"
                placeholder="Enter Project's link..."
              />
            </div>
            <div class="form-group">
              <label
                for="exampleFormControlSelect1"
                class="tw-block tw-mb-1 tw-mt-2 tw-font-medium"
                >Project's Category</label
              >
              <select class="form-control" id="exampleFormControlSelect1">
                <option>JavaScript</option>
                <option>HTML5/CSS3</option>
              </select>
            </div>
            <div class="form-group">
              <label
                for="exampleFormControlTextarea1"
                class="tw-block tw-mb-1 tw-mt-2 tw-font-medium"
                >Short Description</label
              >
              <textarea
                class="form-control"
                id="exampleFormControlTextarea1"
                rows="3"
                placeholder="Enter a short description of the project..."
              ></textarea>
            </div>
            <div class="form-group">
              <label
                for="exampleFormControlTextarea1"
                class="tw-block tw-mb-1 tw-mt-2 tw-font-medium"
                >Detail Description</label
              >
              <textarea
                class="form-control"
                id="exampleFormControlTextarea1"
                rows="3"
                placeholder="Enter detail description of the project..."
              ></textarea>
            </div>
            <div class="form-group">
              <label
                for="exampleFormControlInput1"
                class="tw-block tw-mb-1 tw-mt-2 tw-font-medium"
                >Project's Image</label
              >
              <input
                type="file"
                class="form-control"
                id="exampleFormControlInput1"
              />
            </div>
            <div class="form-group">
              <label
                for="exampleFormControlInput1"
                class="tw-block tw-mb-1 tw-mt-2 tw-font-medium"
                >Completion Date</label
              >
              <input
                type="date"
                class="form-control"
                id="exampleFormControlInput1"
                placeholder="Enter project completion date..."
              />
            </div>
            <div class="form-group">
              <label
                for="exampleFormControlInput1"
                class="tw-block tw-mb-1 tw-mt-2 tw-font-medium"
                >Creator</label
              >
              <input
                type="text"
                class="form-control"
                id="exampleFormControlInput1"
                placeholder="Enter project completion date..."
              />
            </div>
            <div class="tw-mt-4">
              <button class="btn btn-success">Add Project</button>
            </div>
          </form>
        </div>
      </article>
      <!-- END WRAP ARTICLE -->
      ${Footer()}`;
};

export default AddProject;
