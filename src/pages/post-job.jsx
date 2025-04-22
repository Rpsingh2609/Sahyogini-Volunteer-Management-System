import { getCompanies } from "@/api/apiCompanies";
import { addNewJob } from "@/api/apiJobs";
import AddCompanyDrawer from "@/components/add-company-drawer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import useFetch from "@/hooks/use-fetch";
import { useUser } from "@clerk/clerk-react";
import { zodResolver } from "@hookform/resolvers/zod";
import MDEditor from "@uiw/react-md-editor";
import { State } from "country-state-city";
import { useEffect } from "react";
import { Controller, useForm } from "react-hook-form";
import { Navigate, useNavigate } from "react-router-dom";
import { BarLoader } from "react-spinners";
import { z } from "zod";

const schema = z.object({
  title: z.string().min(1, { message: "Title is required" }),
  description: z.string().min(1, { message: "Description is required" }),
  location: z.string().min(1, { message: "Select a location" }),
  company_id: z.string().min(1, { message: "Select or Add a new Company" }),
  requirements: z.string().min(1, { message: "Requirements are required" }),
});

const PostJob = () => {
  const { user, isLoaded } = useUser();
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm({
    defaultValues: { location: "", company_id: "", requirements: "" },
    resolver: zodResolver(schema),
  });

  const {
    loading: loadingCreateJob,
    error: errorCreateJob,
    data: dataCreateJob,
    fn: fnCreateJob,
  } = useFetch(addNewJob);

  const onSubmit = (data) => {
    fnCreateJob({
      ...data,
      recruiter_id: user.id,
      isOpen: true,
    });
  };

  useEffect(() => {
    if (dataCreateJob?.length > 0) navigate("/jobs");
  }, [loadingCreateJob]);

  const {
    loading: loadingCompanies,
    data: companies,
    fn: fnCompanies,
  } = useFetch(getCompanies);

  useEffect(() => {
    if (isLoaded) {
      fnCompanies();
    }
  }, [isLoaded]);

  if (!isLoaded || loadingCompanies) {
    return <BarLoader className="mb-4 w-full" color="#36d7b7" />;
  }

  if (user?.unsafeMetadata?.role !== "recruiter") {
    return <Navigate to="/jobs" />;
  }

  return (
    <div className="flex justify-center items-center min-h-screen bg-white">
      <div className="bg-white shadow-lg rounded-lg p-8 w-full max-w-3xl">
        <h1 className="text-4xl font-extrabold text-center text-black mb-6">
          Post a Volunteering Opportunity
        </h1>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          {/* Title */}
          <div>
            <label className="block text-gray-700 font-medium">Title</label>
            <Input placeholder="Enter job title" {...register("title")} />
            {errors.title && (
              <p className="text-red-500">{errors.title.message}</p>
            )}
          </div>

          {/* Description */}
          <div>
            <label className="block text-gray-700 font-medium">
              Description
            </label>
            <Textarea
              placeholder="Enter job description"
              {...register("description")}
            />
            {errors.description && (
              <p className="text-red-500">{errors.description.message}</p>
            )}
          </div>

          {/* Location & Company */}
          <div className="flex flex-col md:flex-row gap-4">
            {/* Location */}
            <div className="w-full">
              <label className="block text-gray-700 font-medium">
                Location
              </label>
              <Controller
                name="location"
                control={control}
                render={({ field }) => (
                  <Select value={field.value} onValueChange={field.onChange}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select Location" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectGroup>
                        {State.getStatesOfCountry("IN").map(({ name }) => (
                          <SelectItem key={name} value={name}>
                            {name}
                          </SelectItem>
                        ))}
                      </SelectGroup>
                    </SelectContent>
                  </Select>
                )}
              />
              {errors.location && (
                <p className="text-red-500">{errors.location.message}</p>
              )}
            </div>

            {/* NGO Name */}
            <div className="w-full">
              <label className="block text-gray-700 font-medium">
                NGO Name
              </label>
              <Controller
                name="company_id"
                control={control}
                render={({ field }) => (
                  <Select value={field.value} onValueChange={field.onChange}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select NGO">
                        {field.value
                          ? companies?.find(
                              (com) => com.id === Number(field.value)
                            )?.name
                          : "Company"}
                      </SelectValue>
                    </SelectTrigger>
                    <SelectContent>
                      <SelectGroup>
                        {companies?.map(({ name, id }) => (
                          <SelectItem key={name} value={id}>
                            {name}
                          </SelectItem>
                        ))}
                      </SelectGroup>
                    </SelectContent>
                  </Select>
                )}
              />
              {errors.company_id && (
                <p className="text-red-500">{errors.company_id.message}</p>
              )}
            </div>
          </div>

          {/* Requirements */}
          <div className="bg-gray-100 p-4 rounded-lg border border-gray-300 shadow-md">
            <label className="block text-gray-800 font-medium text-lg mb-2">
              Requirements
            </label>
            <Controller
              name="requirements"
              control={control}
              render={({ field }) => (
                <div className="bg-white p-3 rounded-md border border-gray-300">
                  <MDEditor value={field.value} onChange={field.onChange} />
                </div>
              )}
            />
            {errors.requirements && (
              <p className="text-red-500">{errors.requirements.message}</p>
            )}
          </div>

          {/* Errors */}
          {errorCreateJob?.message && (
            <p className="text-red-500">{errorCreateJob.message}</p>
          )}
          {loadingCreateJob && <BarLoader width={"100%"} color="#36d7b7" />}

          {/* Submit Button */}
          <div className="flex justify-center">
            <Button
              type="submit"
              variant="blue"
              size="lg"
              className="w-full md:w-auto px-6 py-3 text-lg"
            >
              Post Opportunity
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default PostJob;
