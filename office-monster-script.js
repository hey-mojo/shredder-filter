(() => {
  const params = new URLSearchParams(window.location.search);
  const query = params.get("query") || "";
  if (window.location.pathname === "/search" && /shredders?/.test(query)) {
    const filterApply = [
      "Environment",
      "Sheet Capacity (70gsm)",
      "Cut Type",
      "Feed Type",
    ];
    function capitalizeWords(text) {
      if (!text) return "";
      return text
        .split(" ")
        .map(
          (word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()
        )
        .join(" ");
    }
    // Utility
    const newDivParent = document.createElement("div");
    newDivParent.classList.add("filter-wrapper");
    const newDivChild = document.createElement("div");
    newDivChild.classList.add("sp-flex", "hide", "shredders");
    const newLoadGrandParent = document.createElement("div");
    newLoadGrandParent.classList.add("ph-item");

    for (let i = 0; i < filterApply.length; i++) {
      const newLoadParent = document.createElement("div");
      newLoadParent.classList.add("ph-row");
      newLoadGrandParent.append(newLoadParent);
    }
    newDivParent.append(newDivChild);
    newDivParent.append(newLoadGrandParent);

    const parendNodeTarget = document.querySelector(
      ".col:has(.productsgrid_container)"
    );
    const childNode = document.createElement("div");
    childNode.classList.add("row");
    const childChildNode = document.createElement("div");
    childChildNode.classList.add("col", "col-lg-12", "col-md-12", "col-sm-12");
    childChildNode.append(newDivParent);
    childNode.append(childChildNode);
    parendNodeTarget.prepend(childNode);
    //end

    const formingFilter = () => {
      newLoadGrandParent.classList.add("hide");
      newDivChild.classList.remove("hide");
      const filterWrapper = document.querySelector("#filterswrapper");
      //select all filters
      const filterSections = document.querySelectorAll(
        "#filterswrapper .filter-section"
      );
      filterSections.forEach((section) => {
        const sectionTitle = section.querySelector(".filter-section-header h5");
        if (sectionTitle) {
          const text = sectionTitle.innerText.trim().toLowerCase();
          const match = filterApply.some((item) => item.toLowerCase() === text);
          if (match) {
            const sectionLabels = section.querySelectorAll(
              ".filter-options label"
            );

            const newSectionElement = document.createElement("section");
            const newSectionTitle = document.createElement("h5");
            const newSectionDiv = document.createElement("div");
            newSectionTitle.innerText = capitalizeWords(sectionTitle.innerText);
            newSectionElement.classList.add(
              `${sectionTitle.innerText
                .toLowerCase()
                .replace(/\s+/g, "-")
                .replace(/[^a-z0-9-]/g, "")}-section`
            );
            newSectionElement.append(newSectionTitle);
            sectionLabels.forEach((label) => {
              const clonedLabel = label.cloneNode(true);
              let clonedLink = clonedLabel.querySelector("a");
              clonedLink.textContent = clonedLink.textContent.replace(
                /\s*\(\d+\)\s*$/,
                ""
              );
              newSectionDiv.append(clonedLabel);
            });
            newSectionElement.append(newSectionDiv);
            newDivChild.append(newSectionElement);
          }
        }
      });
      const activeFilter = newDivParent.querySelectorAll(
        "section:has(.active)"
      );
      activeFilter.forEach((e) => {
        const clearFilter = document.createElement("a");
        clearFilter.href = "javascript:;";
        clearFilter.classList.add("clear-filter");
        clearFilter.textContent = "clear";
        e.querySelector("h5").append(clearFilter);
        let targetClearButtton;
        const filterText = e.querySelector("label a")?.innerText;
        const removeFilters = document.querySelectorAll(
          "#filterswrapper a.remove-filter"
        );
        removeFilters.forEach((e) => {
          console.log("E", e.innerText);
          console.log(filterText);
          if (e.innerText.trim().startsWith(filterText.trim())) {
            targetClearButtton = e;
          }
        });
        if (targetClearButtton) {
          clearFilter.addEventListener("click", () => {
            targetClearButtton.click();
          });
        }
      });
      const removeFilterWrapper = filterWrapper.querySelector(
        ".remove-filter-wrapper"
      );
      if (removeFilterWrapper) {
        const clearAllWrapper = document.createElement("div");
        clearAllWrapper.classList.add("clear-all-wrapper");
        const clearAllButton = document.createElement("a");
        clearAllButton.classList.add("btn", "btn-default", "btn-sm");
        clearAllButton.textContent = "I want to shop all types of shredders";
        clearAllButton.href = "/search?query=shredder";
        clearAllWrapper.append(clearAllButton);
        newDivParent.append(clearAllWrapper);
      }
    };

    if (document.querySelector("#filterswrapper.hide")) {
      const filtersWrapper = document.getElementById("filterswrapper");
      const filtersWrapperobserver = new MutationObserver(
        (mutationsList, obs) => {
          for (const mutation of mutationsList) {
            if (
              mutation.type === "attributes" &&
              mutation.attributeName === "class"
            ) {
              const hasClass = filtersWrapper.classList.contains("hide");
              if (!hasClass) {
                setTimeout(() => {
                  formingFilter();
                }, 100);

                obs.disconnect();
                break;
              }
            }
          }
        }
      );

      filtersWrapperobserver.observe(filtersWrapper, {
        attributes: true,
        attributeFilter: ["class"],
      });
    } else {
      formingFilter();
    }
  }
})();
